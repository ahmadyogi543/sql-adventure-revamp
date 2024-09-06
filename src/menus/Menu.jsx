import React, { useEffect } from "react";

import MENUS from "../constants/menus";

import { useMenuContext } from "../context/MenuContext";

import StageMenu from "./StageMenu";
import GameplayMenu from "./GameplayMenu";
import CompleteMenu from "./CompleteMenu";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Menu() {
  const { menu } = useMenuContext();
  const navigate = useNavigate();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (!authenticated) {
      alert("ALERT: Silahkan login terlebih dahulu sebelum bermain!");
      navigate("/login");
    }
  }, []);

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
