import React from "react";
import { Modal } from "react-bootstrap";

import { useGameStateContext } from "../../context/GameStateContext";
import { useMenuContext } from "../../context/MenuContext";

import AppButton from "../AppButton";

export default function IntroBox({ title, introduction, closing }) {
  const { narration } = useGameStateContext();
  const { isStateStart, isStateDone } = useGameStateContext();
  const { toCompleteMenu } = useMenuContext();

  const handleOnHide = () => {
    if (isStateDone) {
      toCompleteMenu();
    } else {
      narration();
    }
  };

  return (
    <Modal centered show={isStateStart || isStateDone}>
      <Modal.Header className="mx-auto">
        <Modal.Title className="fw-bold">TOPIK: {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>{isStateStart ? "Pendahuluan" : "Penutup"}:</p>
        <p className="m-0">{isStateStart ? introduction : closing}</p>
      </Modal.Body>
      <Modal.Footer className="mx-auto">
        <AppButton
          className="px-2 py-1"
          title={isStateStart ? "MULAI" : "SELESAI"}
          variant="custom-yellow"
          onClick={handleOnHide}
        />
      </Modal.Footer>
    </Modal>
  );
}
