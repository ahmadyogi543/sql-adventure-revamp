import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import HomeLayout from "../../layouts/HomeLayout";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthLoginPage = () => {
  const navigate = useNavigate();
  const { authenticated } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((prevSP) => !prevSP);
  }

  useEffect(() => {
    if (authenticated) {
      alert("Maaf, kamu sudah login. Kembali ke halaman beranda!");
      navigate("/");
    }
  }, []);

  return (
    <HomeLayout>
      <h4 className="fw-bold mb-4">MASUK</h4>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="text" placeholder="E-mail" />
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
