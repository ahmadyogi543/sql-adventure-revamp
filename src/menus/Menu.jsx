import React from "react";

import MENUS from "../constants/menus";

import { useMenuContext } from "../context/MenuContext";

import StageMenu from "./StageMenu";
import GameplayMenu from "./GameplayMenu";
import CompleteMenu from "./CompleteMenu";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Menu() {
  const { menu } = useMenuContext();
  const { authenticated, user } = useAuthContext();

  if (!authenticated) {
    alert("ALERT: Silahkan login terlebih dahulu sebelum bermain!");
    return <Navigate to="/login" />;
  }

  if (authenticated && user.role !== "user") {
    return <Navigate to="/admin" />;
  }

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
