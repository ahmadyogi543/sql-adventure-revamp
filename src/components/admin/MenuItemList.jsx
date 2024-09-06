import { ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  MdBarChart,
  MdDashboard,
  MdGroup,
  MdLogout,
  MdMoving,
  MdSettings,
} from "react-icons/md";

import MenuItem from "./MenuItem";

const MenuItemList = () => {
  const { pathname } = useLocation();

  return (
    <ListGroup as="ul" className="rounded-0" variant="flush">
      <MenuItem
        active={pathname === "/admin"}
        href="/admin"
        icon={<MdDashboard size={22} />}
        title="Dashboard"
      />
      <MenuItem
        active={pathname === "/admin/users"}
        href="/admin/users"
        icon={<MdGroup size={22} />}
        title="Pengguna"
      />
      <MenuItem
        active={pathname === "/admin/progress"}
        href="/admin/progress"
        icon={<MdMoving size={22} />}
        title="Progress"
      />
      <MenuItem
        active={pathname === "/admin/stats"}
        href="/admin/stats"
        icon={<MdBarChart size={22} />}
        title="Statistik"
      />
      <MenuItem
        active={pathname === "/admin/settings"}
        href="/admin/settings"
        icon={<MdSettings size={22} />}
        title="Pengaturan"
      />

      <MenuItem href="/" icon={<MdLogout size={22} />} title="KELUAR" />
    </ListGroup>
  );
};

export default MenuItemList;
