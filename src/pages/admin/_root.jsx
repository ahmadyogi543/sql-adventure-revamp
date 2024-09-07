import { Col, Row } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import MenuItemList from "../../components/admin/MenuItemList";

const AdminRootPage = () => {
  const { authenticated, user } = useAuthContext();

  if (!authenticated) {
    alert("ALERT: Silahkan login terlebih dahulu sebelum bermain!");
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Row className="g-0 flex-grow-1">
        <Col className="border-end justify-content-between" md={3}>
          <div className="text-center p-4 mb-3">
            <p className="m-0 h6 text-primary fw-bold">DAFTAR MENU</p>
          </div>
          <MenuItemList />
        </Col>
        <Col className="d-flex flex-column flex-grow-1">
          <Outlet />
        </Col>
      </Row>
      <footer className="flex-center text-dark py-3 border-top">
        <div className="d-flex align-items-center small">
          <span className="fw-bold me-2">SQL Adventure</span>
          <span className="opacity-75">© 2024 PDWM Pilkom</span>
        </div>
      </footer>
    </>
  );
};

export default AdminRootPage;
