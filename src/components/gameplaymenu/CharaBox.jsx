import React, { useEffect, useState } from "react";
import { Button, OverlayTrigger, Popover, Spinner } from "react-bootstrap";

import { useGameStateContext } from "../../context/GameStateContext";
import { attemptStage } from "../../api/progress";
import { useAuthContext } from "../../context/AuthContext";
import Joyride, { STATUS } from "react-joyride";

const STEPS = [
  {
    target: "#query",
    content: "Di sini kamu dapat menulis perintah sesuai dengan arahan",
    disableBeacon: true,
  },
  {
    target: "#table",
    content:
      "Di sini kamu dapat melihat definisi dari tabel yang akan digunakan dalam permainan",
    disableBeacon: true,
  },
  {
    target: "#output",
    content: "Di sini akan tampil output dari perintah yang kamu ketikkan",
    disableBeacon: true,
  },
  {
    target: "#log",
    content:
      "Jika kamu lupa dengan perintah atau dialog sebelumnya, riwayat dialog dapat diakses di sini!",
    disableBeacon: true,
  },
];

const TIMEOUT = 5000;

export default function CharaBox({ id, title, missions }) {
  const { token, user } = useAuthContext();
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
  const { score, decrementScore, incrementScore, resetDecrementScore } =
    useGameStateContext();
  const { realIncrementScore, setRealIncrementScore } = useGameStateContext();
  const [showJoyride, setShowJoyride] = useState(false);

  const mission = missions[missionIndex];
  const dialogs = mission.dialogs;
  const dialog = dialogs[dialogIndex];

  const isMissionIndexAtLast = missionIndex === missions.length - 1;
  const isDialogIndexAtLast = dialogIndex === dialogs.length - 1;

  useEffect(() => {
    let instructionCount = 0;

    missions.forEach((mission) => {
      mission.dialogs.forEach((dialog) => {
        if (dialog.type === "instruction") {
          instructionCount++;
        }
      });
    });

    setRealIncrementScore(100 / instructionCount);
  }, [missions]);

  // this useEffect will trigger to detect if the dialog is the last one
  // then it will set a timer 2 or 3 seconds or so to change to the next mission
  useEffect(() => {
    if (id === 1 && missionIndex === 0 && dialogIndex === 1) {
      setShowJoyride(true);
    }

    if (!isDialogIndexAtLast) return;

    const timer = setTimeout(() => {
      if (!isMissionIndexAtLast) {
        resetDialogIndex();
        incrementMissionIndex();
      } else {
        done();

        // POST update users progress with score
      }
      attemptStage(token, user.id, id, missions.length, score).catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
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

    if (realIncrementScore - decrementScore <= 0) {
      incrementScore(realIncrementScore / 5);
    } else {
      incrementScore(realIncrementScore - decrementScore);
    }

    resetDecrementScore();
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
        show={(isStateNarration || isStateInstruction) && !showJoyride}
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
                    <span className="text-muted me-2">
                      {!isMissionIndexAtLast
                        ? "memuat misi baru..."
                        : "menyelesaikan topik..."}
                    </span>
                    <Spinner size="sm" variant="custom-green" />
                  </div>
                )}
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <img
          id="chara"
          className="d-block position-absolute"
          src="/images/chara.png"
          alt="chara"
          width={220}
          style={{
            bottom: -24,
          }}
        />
      </OverlayTrigger>
      {showJoyride && (
        <Joyride
          callback={(data) => {
            const { status, action } = data;

            if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
              // Call the function when the tour is finished or skipped
              setShowJoyride(false);
            }
          }}
          hideCloseButton
          locale={{ next: "LANJUT", last: "SELESAI" }}
          hideBackButton
          styles={{
            buttonNext: { backgroundColor: "#51973f" },
            buttonBack: { color: "#51973f" },
            beaconInner: { backgroundColor: "#51973f" },
            beaconOuter: {
              borderColor: " #51973f",
              backgroundColor: "rgba(0,0,0,0)",
            },
          }}
          continuous
          steps={STEPS}
        />
      )}
    </div>
  );
}
