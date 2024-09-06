import { MenuContextProvider } from "../../context/MenuContext";

import Menu from "../../menus/Menu";

const TEST_MODE = import.meta.env.VITE_TEST_MODE;

const HomeGameplayPage = () => {
  return (
    <MenuContextProvider>
      <Menu />
    </MenuContextProvider>
  );
};

export default HomeGameplayPage;
