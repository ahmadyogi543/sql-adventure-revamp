import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const HomeLayout = ({ children }) => {
  return (
    <Container fluid className="bg-primary-dark flex-column-grow">
      <Row className="flex-grow-1">
        <Col className="bg-primary flex-center flex-column p-5" md={5}>
          <img className="d-block mb-4" width={320} src={Logo} alt="logo" />
          <div className="bg-secondary rounded px-4 py-4 text-center text-primary">
            <p className="fw-bold m-0">++ Game Edukasi dengan Materi SQL ++</p>
            <p className="small m-0">
              Berkonteks Lingkungan Lahan Basah Kalimantan Selatan
            </p>
          </div>
          <div className="mt-4">
            <Link to="/login">
              <Button className="me-2" variant="secondary">
                <small className="fw-bold text-primary">MASUK</small>
              </Button>
            </Link>

            <Link to="/register">
              <Button variant="outline-secondary">
                <small className="fw-bold">DAFTAR</small>
              </Button>
            </Link>
          </div>
        </Col>
        <Col className="d-flex flex-column bg-secondary text-primary p-5">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeLayout;
