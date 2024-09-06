import React, { useEffect } from "react";
import { Button, OverlayTrigger, Popover, Spinner } from "react-bootstrap";

import { useGameStateContext } from "../../context/GameStateContext";
import AppCard from "../AppCard";

const TIMEOUT = 5000;

export default function CharaBox({ title, missions }) {
  const { state, narration, instruction, done } = useGameStateContext();
  const {
    isStateStart,
    isStateNarration,
    isStateInstruction,
    isStateAnswered,
  } = useGameStateContext();
  const {
    missionIndex,
    dialogIndex,
    incrementMissionIndex,
    incrementDialogIndex,
    resetDialogIndex,
  } = useGameStateContext();
  const { setDialog } = useGameStateContext();

  const mission = missions[missionIndex];
  const dialogs = mission.dialogs;
  const dialog = dialogs[dialogIndex];

  const isMissionIndexAtLast = missionIndex === missions.length - 1;
  const isDialogIndexAtLast = dialogIndex === dialogs.length - 1;

  // this useEffect will trigger to detect if the dialog is the last one
  // then it will set a timer 2 or 3 seconds or so to change to the next mission
  useEffect(() => {
    if (!isDialogIndexAtLast) return;

    const timer = setTimeout(() => {
      if (!isMissionIndexAtLast) {
        resetDialogIndex();
        incrementMissionIndex();
      } else {
        done();
      }
    }, TIMEOUT);

    return () => clearTimeout(timer);
  }, [dialogIndex]);

  // this useEffect will trigger to change the state of the game
  // based on the dialog type (narration or instruction)
  useEffect(() => {
    if (isStateStart) return;

    if (dialog.type === "narration") narration();
    else if (dialog.type === "instruction") instruction();
  }, [dialogIndex]);

  // this useEffect will trigger to set the dialog query and type
  // that will use to verify  the user answer
  useEffect(() => {
    if (isStateInstruction) {
      setDialog({
        query: dialog.sql.query,
        type: dialog.sql.type,
        validation: dialog.sql.type === "run" ? dialog.sql.validation : "",
      });
    }
  }, [isStateInstruction]);

  // this useEffect will trigger when the user click the submit button
  // in the query box (which where the game state become answered)
  useEffect(() => {
    if (!isStateAnswered) return;

    // what we do is to increment the dialog index
    // and change the state of the game to narration
    incrementDialogIndex();
    narration();
  }, [state]);

  return (
    <div className="flex-grow-1 position-relative">
      <h5 className="rounded fw-bold text-primary text-decoration-underline">
        TOPIK: {title.toUpperCase()}
      </h5>
      <p className="m-0">
        MISI {missionIndex + 1}: {mission.title.toUpperCase()}
      </p>
      <OverlayTrigger
        show={isStateNarration || isStateInstruction}
        placement="right"
        overlay={
          <Popover id="popover-basic">
            <Popover.Body>
              <p>{dialog.text}</p>
              <div className="d-flex align-items-center justify-content-between">
                <span>
                  {dialogIndex + 1}/{dialogs.length}
                </span>
                {!isDialogIndexAtLast ? (
                  <Button
                    className={`text-white fw-bold px-3 ${
                      (isStateInstruction || isDialogIndexAtLast) && "opacity-0"
                    }`}
                    disabled={isStateInstruction || isDialogIndexAtLast}
                    onClick={incrementDialogIndex}
                    size="sm"
                    variant="custom-green"
                  >
                    OK
                  </Button>
                ) : (
                  <div className="d-flex align-items-center">
                    <span className="text-muted me-2">memuat misi baru...</span>
                    <Spinner size="sm" variant="custom-green" />
                  </div>
                )}
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <img
          className="d-block position-absolute"
          src="/images/chara.png"
          alt="chara"
          width={240}
          style={{
            bottom: -24,
          }}
        />
      </OverlayTrigger>
    </div>
  );
}
