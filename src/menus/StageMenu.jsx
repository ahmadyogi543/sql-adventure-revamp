import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useMenuContext } from "../context/MenuContext";
import GameplayMenuLayout from "../layouts/GameplayMenuLayout";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getStageData } from "../api/progress";
import { Link } from "react-router-dom";

const StageMenu = () => {
  const { token, user } = useAuthContext();
  const { toGameplayMenu } = useMenuContext();
  const [data, setData] = useState([]);
  const [tampilkanModal, setTampilkanModal] = useState(false);
  const [stageTerpilih, setStageTerpilih] = useState(null);

  useEffect(() => {
    getStageData(token, user.id)
      .then((data) => setData(data))
      .catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
  }, []);

  const handleKlikStage = (stage) => {
    if (stage.unlock) {
      setStageTerpilih(stage);
      setTampilkanModal(true);
    } else {
      alert("Topik ini belum terbuka!");
    }
  };

  const handleTutup = () => setTampilkanModal(false);

  return (
    <GameplayMenuLayout title="PILIH TOPIK">
      <Container className="p-5">
        <Row className="g-4 gap-2">
          {data.map((d) => (
            <Col className="flex-center flex-column" key={`stage-menu-${d.id}`}>
              <img
                onClick={() => handleKlikStage(d)}
                className={`d-block rounded ${
                  d.unlock
                    ? "cursor-pointer animation-shake"
                    : "cursor-not-allowed"
                }`}
                width={160}
                src={d.uri}
                alt=""
              />
              <div className="mt-2 flex-center">
                {Array.from({ length: d.star }, (_, k) => k + 1).map((_, k) => (
                  <img
                    key={`star-card-${k}`}
                    width={24}
                    src="/images/stage-cards/star.png"
                    alt=""
                  />
                ))}
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal untuk memilih Belajar atau Bermain */}
        <Modal show={tampilkanModal} onHide={handleTutup} centered>
          <Modal.Header closeButton>
            <Modal.Title>Pilih Aksi</Modal.Title>
          </Modal.Header>
          <Modal.Body className="mx-auto">
            <p>Apakah Anda ingin belajar atau bermain?</p>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Link to={`/learn`}>
              <Button variant="outline-primary">BELAJAR</Button>
            </Link>
            <Button
              variant="outline-primary"
              onClick={() => {
                toGameplayMenu({ data: stageTerpilih });
                handleTutup();
              }}
            >
              BERMAIN
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </GameplayMenuLayout>
  );
};

export default StageMenu;
