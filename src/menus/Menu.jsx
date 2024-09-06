import React from "react";

import MENUS from "../constants/menus";

import { useMenuContext } from "../context/MenuContext";

import StageMenu from "./StageMenu";
import GameplayMenu from "./GameplayMenu";
import CompleteMenu from "./CompleteMenu";

export default function Menu() {
  const { menu } = useMenuContext();

  return (
    <>
      {(() => {
        switch (menu) {
          case MENUS.STAGE:
            return <StageMenu />;
          case MENUS.GAMEPLAY:
            return <GameplayMenu />;
          case MENUS.COMPLETE:
            return <CompleteMenu />;
          default:
            return null;
        }
      })()}
    </>
  );
}
