import useSQLWASM from "./useSQLWASM";

export default function useSQLExecutor(filepath) {
  const { db, loading, error } = useSQLWASM(filepath);

  // used for unified the return value of exec and run
  const getSQLExecutorResult = (data, message, status) => ({
    data,
    message,
    status,
  });

  // WARNING: use this only for SELECT command
  // the result is array, contains the column names and values
  const exec = (statement) => {
    try {
      const [result] = db.exec(statement);
      return getSQLExecutorResult(result, "", "success");
    } catch (err) {
      return getSQLExecutorResult(null, err.message, "failed");
    }
  };

  // WARNING: use this for INSERT, UPDATE and DELETE command
  // the result is integer, contains the number of modified rows
  const run = (statement) => {
    try {
      const rowsModified = db.run(statement).getRowsModified();
      return getSQLExecutorResult(rowsModified, "", "success");
    } catch (err) {
      return getSQLExecutorResult(0, err.message, "failed");
    }
  };

  // WARNING: use this ONLY for validate the query, not actually run it
  const check = (statement, message = "") => {
    try {
      db.run("BEGIN TRANSACTION;").run(statement).run("ROLLBACK");
      return getSQLExecutorResult(null, message, "failed");
    } catch (err) {
      db.run("END TRANSACTION");
      return getSQLExecutorResult(null, err.message, "failed");
    }
  };

  const validate = (statement, validationStatement, isDelete = false) => {
    try {
      db.run("BEGIN TRANSACTION");
      db.run(statement);
      const result = db.exec(validationStatement);
      console.log(result);
      const condition = !isDelete ? result.length > 0 : result.length === 0;
      if (condition) {
        db.run("COMMIT");
        return getSQLExecutorResult(null, "Ya, jawaban kamu benar!", "success");
      } else {
        db.run("ROLLBACK");
        return getSQLExecutorResult(
          null,
          "Maaf, tidak terjadi perubahan yang diinginkan pada data!",
          "failed"
        );
      }
    } catch (err) {
      db.run("END TRANSACTION");
      return getSQLExecutorResult(null, err.message, "failed");
    }
  };

  return { db, exec, run, check, validate, loading, error };
}
