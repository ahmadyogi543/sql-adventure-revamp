import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

import Logo from "../assets/images/logo.png";
import { MdLogout } from "react-icons/md";

const HomeLayout = ({ children }) => {
  const location = useLocation();
  const { authenticated, user, logout } = useAuthContext();

  function handleOnClickLogoutBtn() {
    logout()
      .then(() => {
        alert("INFO: Berhasil keluar, kembali ke beranda!");
      })
      .catch((err) => {
        alert(`ERROR: ${err.message}`);
      });
  }

  return (
    <Container fluid className="bg-primary-dark flex-column-grow">
      <Row className="flex-grow-1">
        <Col className="bg-primary flex-center flex-column p-5" md={5}>
          <img className="d-block mb-4" width={280} src={Logo} alt="logo" />
          <div className="bg-secondary rounded px-4 py-4 text-center text-primary">
            <p className="fw-bold m-0">++ Game Edukasi dengan Materi SQL ++</p>
            <p className="small m-0">
              Berkonteks Lingkungan Lahan Basah Kalimantan Selatan
            </p>
          </div>
          {authenticated ? (
            <div className="mt-4 mb-3 bg-primary-dark py-4 px-5 rounded">
              <p className="text-white m-0">
                Selamat datang, {user ? user.name : "Pengguna"}!
              </p>
              <Button
                className="d-block mx-auto mt-3"
                onClick={handleOnClickLogoutBtn}
              >
                <MdLogout className="me-2" size={20} />
                KELUAR
              </Button>
              <a
                href="https://forms.gle/toAJRdiJaLycTLfs8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="d-block mx-auto mt-3" variant="outline-secondary">
                  <small className="fw-bold">ADUAN</small>
                </Button>
              </a>
            </div>
          ) : (
            <>
              <div className="mt-4">
                {location.pathname === "/" && (
                  <>
                    <Link to="/login">
                      <Button className="me-2" variant="secondary">
                        <small className="fw-bold text-primary">MASUK</small>
                      </Button>
                    </Link>

                    <Link to="/register">
                      <Button className="me-2" variant="outline-secondary">
                        <small className="fw-bold">DAFTAR</small>
                      </Button>
                    </Link>

                    <a
                      href="https://forms.gle/toAJRdiJaLycTLfs8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline-secondary">
                        <small className="fw-bold">ADUAN</small>
                      </Button>
                    </a>
                  </>
                )}
              </div>
            </>
          )}
          {location.pathname !== "/" && (
            <Link to="/">
              <Button variant="outline-secondary">
                <small className="fw-bold">KEMBALI</small>
              </Button>
            </Link>
          )}
        </Col>
        <Col className="d-flex flex-column bg-secondary text-primary p-5">
          {children}
        </Col>
      </Row>
      <footer className="flex-center text-secondary py-3">
        <div className="d-flex align-items-center small">
          <span className="fw-bold me-2">SQL Adventure</span>
          <span className="opacity-75">© 2024 PDWM Pilkom</span>
        </div>
      </footer>
    </Container>
  );
};

export default HomeLayout;
