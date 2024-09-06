import { ListGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdBarChart,
  MdDashboard,
  MdGroup,
  MdLogout,
  MdMoving,
  MdSettings,
} from "react-icons/md";

import MenuItem from "./MenuItem";
import { useAuthContext } from "../../context/AuthContext";

const MenuItemList = () => {
  const { pathname } = useLocation();
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  function handleOnClickLogoutBtn() {
    logout()
      .then(() => {
        alert("INFO: Berhasil keluar, kembali ke beranda!");
        navigate("/");
      })
      .catch((err) => {
        alert(`ERROR: ${err.message}`);
      });
  }

  return (
    <ListGroup as="ul" className="rounded-0" variant="flush">
      <MenuItem
        active={pathname === "/admin"}
        onClick={() => navigate("/admin")}
        icon={<MdDashboard size={22} />}
        title="Dashboard"
      />
      <MenuItem
        active={pathname === "/admin/users"}
        onClick={() => navigate("/admin/users")}
        icon={<MdGroup size={22} />}
        title="Pengguna"
      />
      <MenuItem
        active={pathname === "/admin/progress"}
        onClick={() => navigate("/admin/progress")}
        icon={<MdMoving size={22} />}
        title="Progress"
      />
      <MenuItem
        active={pathname === "/admin/stats"}
        onClick={() => navigate("/admin/stats")}
        icon={<MdBarChart size={22} />}
        title="Statistik"
      />
      <MenuItem
        active={pathname === "/admin/settings"}
        onClick={() => navigate("/admin/settings")}
        icon={<MdSettings size={22} />}
        title="Pengaturan"
      />

      <MenuItem
        onClick={handleOnClickLogoutBtn}
        icon={<MdLogout size={22} />}
        title="KELUAR"
      />
    </ListGroup>
  );
};

export default MenuItemList;
