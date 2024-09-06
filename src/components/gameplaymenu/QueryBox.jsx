import React, { useState } from "react";
import { Form } from "react-bootstrap";

import { useGameStateContext } from "../../context/GameStateContext";
import { checkAnswer } from "../../utils/gameplay";

import AppButton from "../AppButton";

export default function QueryBox({ exec, run, check, validate }) {
  const [userQuery, setUserQuery] = useState("");
  const { appendResults } = useGameStateContext();
  const { isStateInstruction } = useGameStateContext();
  const { dialog } = useGameStateContext();

  const handleOnSubmit = () => {
    const results = checkAnswer(
      dialog.query,
      dialog.validation,
      userQuery.trim(),
      dialog.type,
      exec,
      check,
      validate
    );
    appendResults(results);

    setUserQuery("");
  };

  return (
    <div className="d-flex position-relative" style={{ zIndex: 100 }}>
      <Form.Control
        as="textarea"
        className="resize-none me-3 p-3"
        placeholder="Tulis query di sini..."
        rows={4}
        onChange={(event) => setUserQuery(event.target.value)}
        value={userQuery}
      ></Form.Control>
      <div>
        <AppButton
          className="p-2 mb-3"
          disabled={!isStateInstruction}
          title="Submit"
          onClick={handleOnSubmit}
          variant="custom-green"
        />
        <AppButton
          className="p-2"
          disabled={!isStateInstruction}
          title="Clear"
          onClick={() => setUserQuery("")}
          variant="custom-yellow"
        />
      </div>
    </div>
  );
}
