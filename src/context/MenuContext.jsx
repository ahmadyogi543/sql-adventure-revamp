import { createContext, useContext, useState } from "react";

import MENUS from "../constants/menus";

const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const [menu, setMenu] = useState(MENUS.STAGE);
  const [payload, setPayload] = useState({});

  const setMenuAndPayload = (menu, payload) => {
    setMenu(menu);
    setPayload(payload);
  };

  const toStartMenu = (payload = {}) => setMenuAndPayload(MENUS.START, payload);

  const toStageMenu = (payload = {}) => setMenuAndPayload(MENUS.STAGE, payload);

  const toGameplayMenu = (payload = {}) =>
    setMenuAndPayload(MENUS.GAMEPLAY, payload);

  const toCompleteMenu = (payload = {}) =>
    setMenuAndPayload(MENUS.COMPLETE, payload);

  return (
    <MenuContext.Provider
      value={{
        menu,
        payload,
        toStartMenu,
        toStageMenu,
        toGameplayMenu,
        toCompleteMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
