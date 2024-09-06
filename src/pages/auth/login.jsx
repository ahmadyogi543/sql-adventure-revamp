import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import HomeLayout from "../../layouts/HomeLayout";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const AuthLoginPage = () => {
  const navigate = useNavigate();
  const { authenticated, login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((prevSP) => !prevSP);
  }

  function handleOnSubmit(ev) {
    ev.preventDefault();

    const form = ev.currentTarget;
    const email = form["email"].value.trim();
    const password = form["password"].value.trim();

    login(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(`ERROR: ${err.message}`);
      });
  }

  if (authenticated) {
    alert("ALERT: Maaf, kamu sudah login. Kembali ke halaman beranda!");
    return <Navigate to="/" />;
  }

  return (
    <HomeLayout>
      <h4 className="fw-bold mb-4">MASUK</h4>
      <Form onSubmit={handleOnSubmit} validated={false}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="E-mail" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Kata Sandi</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
            />
            <Button className="flex-center" onClick={toggleShowPassword}>
              {showPassword ? (
                <BsFillEyeFill className="h6 m-0" />
              ) : (
                <BsFillEyeSlashFill className="h6 m-0" />
              )}
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mt-4">
          <Button className="me-2" variant="primary" type="submit">
            <small>MASUK</small>
          </Button>
          <Button variant="outline-primary" type="reset">
            <small>RESET</small>
          </Button>
        </Form.Group>

        <div className="mt-5">
          <Form.Text>
            Belum punya akun? <a href="/register">Daftar</a>
          </Form.Text>
        </div>
      </Form>
    </HomeLayout>
  );
};

export default AuthLoginPage;
