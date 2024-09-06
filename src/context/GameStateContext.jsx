import { createContext, useContext, useState } from "react";

import GAMESTATES from "../constants/game-states";

const GameStateContext = createContext();

export function GameStateContextProvider({ children }) {
  // state of a game
  const [state, setState] = useState(GAMESTATES.START);
  const isStateStart = state === GAMESTATES.START;
  const isStateNarration = state === GAMESTATES.NARRATION;
  const isStateInstruction = state === GAMESTATES.INSTRUCTION;
  const isStateAnswered = state === GAMESTATES.ANSWERED;
  const isStateDone = state === GAMESTATES.DONE;

  // dialog and output results
  const [dialog, setDialog] = useState({ query: "", type: "", validation: "" });
  const [results, setResults] = useState([]);

  // index of mission and dialog for each topic
  const [index, setIndex] = useState({
    mission: 0,
    dialog: 0,
  });

  // functions to change state of the game
  const start = () => setState(GAMESTATES.START);
  const narration = () => setState(GAMESTATES.NARRATION);
  const instruction = () => setState(GAMESTATES.INSTRUCTION);
  const done = () => setState(GAMESTATES.DONE);
  const answered = () => setState(GAMESTATES.ANSWERED);

  // functions to handle output tables
  const appendResults = (result) =>
    setResults((prevResults) => [...prevResults, result]);
  const clearResults = () => setResults([]);

  // functions to handle changes of index (mission and dialog)
  const incrementMissionIndex = () =>
    setIndex((prevIndex) => ({ ...prevIndex, mission: prevIndex.mission + 1 }));
  const resetMissionIndex = () =>
    setIndex((prevIndex) => ({ ...prevIndex, mission: 0 }));
  const incrementDialogIndex = () =>
    setIndex((prevIndex) => ({ ...prevIndex, dialog: prevIndex.dialog + 1 }));
  const resetDialogIndex = () =>
    setIndex((prevIndex) => ({ ...prevIndex, dialog: 0 }));

  return (
    <GameStateContext.Provider
      value={{
        // game state utils
        state,
        start,
        narration,
        instruction,
        answered,
        done,
        isStateStart,
        isStateNarration,
        isStateInstruction,
        isStateAnswered,
        isStateDone,

        // dialog
        dialog,
        setDialog,

        // results utils
        results,
        appendResults,
        clearResults,

        // indexes utils
        missionIndex: index.mission,
        dialogIndex: index.dialog,
        incrementMissionIndex,
        resetMissionIndex,
        incrementDialogIndex,
        resetDialogIndex,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameStateContext() {
  return useContext(GameStateContext);
}
