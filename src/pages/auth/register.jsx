import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import { authRegister } from "../../api/auth";
import HomeLayout from "../../layouts/HomeLayout";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const AuthRegisterPage = () => {
  const navigate = useNavigate();
  const { authenticated } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  function toggleShowPassword(kind) {
    if (kind === "real") {
      setShowPassword((prevSP) => !prevSP);
    } else {
      setShowRepeatPassword((prevRSP) => !prevRSP);
    }
  }

  function handleOnSubmit(ev) {
    ev.preventDefault();

    const form = ev.currentTarget;
    const name = form["name"].value.trim();
    const email = form["email"].value.trim();
    const institution = form["institution"].value.trim();
    const password = form["password"].value.trim();
    const repeatPassword = form["repeat_password"].value.trim();

    if (password !== repeatPassword) {
      alert("ALERT: Pastikan kata sandi dan ulangi kata sandi sama!");
      return;
    }

    authRegister(name, email, institution, password)
      .then(() => {
        alert("INFO: Akun berhasil didaftarkan, silahkan login!");
        navigate("/login");
      })
      .catch((err) => alert(`ERROR: ${err.message}`));
  }

  if (authenticated) {
    alert("ALERT: Maaf, kamu sudah login. Kembali ke halaman beranda!");
    return <Navigate to="/" />;
  }

  return (
    <HomeLayout>
      <h4 className="fw-bold mb-4">DAFTAR</h4>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="full-name">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control
            required
            name="name"
            type="text"
            placeholder="Nama Lengkap"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="E-mail"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="institution">
          <Form.Label>Institusi</Form.Label>
          <Form.Control
            required
            name="institution"
            type="text"
            placeholder="Institusi"
          />
        </Form.Group>

        <Row className="g-3">
          <Col>
            <Form.Label>Kata Sandi</Form.Label>
            <InputGroup>
              <Form.Control
                required
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Kata Sandi"
              />
              <Button
                className="flex-center"
                onClick={() => toggleShowPassword("real")}
              >
                {showPassword ? (
                  <BsFillEyeFill className="h6 m-0" />
                ) : (
                  <BsFillEyeSlashFill className="h6 m-0" />
                )}
              </Button>
            </InputGroup>
          </Col>
          <Col>
            <Form.Label>Ulangi Kata Sandi</Form.Label>
            <InputGroup>
              <Form.Control
                required
                name="repeat_password"
                type={showRepeatPassword ? "text" : "password"}
                placeholder="Ulangi Kata Sandi"
              />
              <Button
                className="flex-center"
                onClick={() => toggleShowPassword("repeat")}
              >
                {showRepeatPassword ? (
                  <BsFillEyeFill className="h6 m-0" />
                ) : (
                  <BsFillEyeSlashFill className="h6 m-0" />
                )}
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Form.Group className="mt-4">
          <Button className="me-2" variant="primary" type="submit">
            <small>DAFTAR</small>
          </Button>
          <Button variant="outline-primary" type="reset">
            <small>RESET</small>
          </Button>
        </Form.Group>

        <div className="mt-5">
          <Form.Text>
            Sudah punya akun? <a href="/login">Masuk</a>
          </Form.Text>
        </div>
      </Form>
    </HomeLayout>
  );
};

export default AuthRegisterPage;
