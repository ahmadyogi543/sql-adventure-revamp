const getCheckAnswerResult = (
  correct,
  data,
  message,
  query,
  isTrueError = false
) => ({
  correct,
  data,
  message,
  query,
  isTrueError,
});

export function checkAnswer(
  dialogQuery,
  dialogValidationQuery,
  userQuery,
  dialogQueryType,
  exec,
  check,
  validate
) {
  if (userQuery.trim() === "") {
    return getCheckAnswerResult(
      false,
      null,
      "Maaf, perintah tidak boleh kosong!",
      userQuery
    );
  }

  if (userQuery.trim().charAt(userQuery.trim().length - 1) !== ";") {
    return getCheckAnswerResult(
      false,
      null,
      "Maaf, perintah harus diakhiri karakter titik koma!",
      userQuery
    );
  }

  // check the user query, only for SELECT, INSERT, UPDATE and DELETE
  const regex = /^(SELECT|INSERT|UPDATE|DELETE)\b/i;
  if (!regex.test(userQuery)) {
    return getCheckAnswerResult(
      false,
      null,
      "Maaf, hanya perintah SELECT, INSERT, UPDATE dan DELETE saja yang dapat digunakan!",
      userQuery
    );
  }

  // compare the dialog query and user query, don't let
  // the user execute an INSERT when the question is SELECT
  // and vice-versa
  if (
    (dialogQueryType === "exec" &&
      /^INSERT|UPDATE|DELETE\b/i.test(userQuery)) ||
    (dialogQueryType === "run" && /^SELECT\b/i.test(userQuery))
  ) {
    const { message, status } = check(
      userQuery,
      "Maaf, perintah yang kamu kirim tidak diperbolehkan!"
    );
    return getCheckAnswerResult(
      false,
      null,
      status === "success" ? message : `Kesalahan: ${message}`,
      userQuery
    );
  }

  if (dialogQueryType === "exec") {
    const dialogResult = exec(dialogQuery);
    const userResult = exec(userQuery);

    // check if dialog and user result is not null
    if (!dialogResult && !userResult) {
      return getCheckAnswerResult(
        false,
        null,
        "Kesalahan: sistem sedang tidak baik-baik saja!",
        userQuery
      );
    }

    // check the result of user query execution
    // this will return the actual error from SQLite
    if (userResult.status === "failed") {
      return getCheckAnswerResult(
        false,
        null,
        `Kesalahan: ${userResult.message}`,
        userQuery,
        true
      );
    }

    // compare if the data is empty array
    if (!dialogResult.data) {
      if (userResult.data) {
        return getCheckAnswerResult(
          false,
          null,
          "Maaf, output tabel tidak sesuai!",
          userQuery,
          true
        );
      }
      return getCheckAnswerResult(
        true,
        null,
        "Ya, jawaban kamu benar!",
        userQuery
      );
    }

    // compare the columns of dialog and user query result
    if (
      JSON.stringify(userResult.data.columns)
        .toLowerCase()
        .replace(/\s+/g, "") !==
      JSON.stringify(dialogResult.data.columns)
        .toLowerCase()
        .replace(/\s+/g, "")
    ) {
      return getCheckAnswerResult(
        false,
        userResult.data,
        "Maaf, kolom pada tabel tidak sesuai!",
        userQuery,
        true
      );
    }

    const filteredUserResultDataValues = userResult.data.values.filter(
      (value) => value !== null
    );
    const filteredDialogResultDataValues = dialogResult.data.values.filter(
      (value) => value !== null
    );
    // compare the number of rows of dialog and user query result
    if (filteredUserResultDataValues < filteredDialogResultDataValues) {
      return getCheckAnswerResult(
        false,
        userResult.data,
        "Maaf, beberapa baris data pada tabel tidak ada!",
        userQuery,
        true
      );
    }

    if (filteredUserResultDataValues > filteredDialogResultDataValues) {
      return getCheckAnswerResult(
        false,
        userResult.data,
        "Maaf, terdapat kelebihan baris data pada tabel!",
        userQuery,
        true
      );
    }

    // if the code reaches here, then the user answer is right
    return getCheckAnswerResult(
      true,
      userResult.data,
      "Ya, jawaban kamu benar!",
      userQuery
    );
  } else {
    let isDelete = false;

    const regex = /^(DELETE)\b/i;
    if (regex.test(dialogQuery)) {
      isDelete = true;
    }

    const userResult = validate(userQuery, dialogValidationQuery, isDelete);

    // check if dialog and user result is not null
    if (!userResult) {
      return getCheckAnswerResult(
        false,
        null,
        "Kesalahan: sistem sedang tidak baik-baik saaja!",
        userQuery,
        true
      );
    }

    // check the result of user query execution
    // this will return the actual error from SQLite
    if (userResult.status === "failed") {
      return getCheckAnswerResult(
        false,
        null,
        `Kesalahan: ${userResult.message}`,
        userQuery,
        true
      );
    }

    return getCheckAnswerResult(true, null, userResult.message, userQuery);
  }
}
