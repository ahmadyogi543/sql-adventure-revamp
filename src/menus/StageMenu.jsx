import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import { useMenuContext } from "../context/MenuContext";
import GameplayMenuLayout from "../layouts/GameplayMenuLayout";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getStageData } from "../api/progress";
import { Link } from "react-router-dom";
import objectives from "../data/objective.json";

const StageMenu = () => {
  const { token, user } = useAuthContext();
  const { toGameplayMenu } = useMenuContext();
  const [data, setData] = useState([]);
  const [tampilkanModal, setTampilkanModal] = useState(false);
  const [stageTerpilih, setStageTerpilih] = useState(null);
  const [tujuan, setTujuan] = useState("");

  useEffect(() => {
    // Mengambil data stage dari API
    getStageData(token, user.id)
      .then((data) => {
        const dataWithObjectives = data.map((stage) => {
          const objective = objectives.find((obj) => obj.id === stage.id);
          return {
            ...stage,
            tujuan: objective?.tujuan || "Tidak ada tujuan.",
            title: objective.title || "Informasi Topik",
          };
        });
        setData(dataWithObjectives);
      })
      .catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
  }, []);

  const handleKlikStage = (stage) => {
    if (stage.unlock) {
      setStageTerpilih(stage);
      setTujuan(stage.tujuan);
      setTampilkanModal(true);
    } else {
      alert("Topik ini belum terbuka!");
    }
  };

  const handleTutup = () => setTampilkanModal(false);

  return (
    <GameplayMenuLayout title="PILIH TOPIK">
      <Container className="p-5">
        <Row className="g-5">
          {data.map((d) => (
            <Col
              className="flex-center flex-column"
              key={`stage-menu-${d.id}`}
              sm={6}
              md={4}
              lg={3}
              xl={2}
            >
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
                    alt="star"
                  />
                ))}
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal untuk memilih Belajar atau Bermain */}
        <Modal show={tampilkanModal} onHide={handleTutup} centered>
          <Modal.Header className="mx-auto">
            <Modal.Title className="p-2 fw-bold text-center">
              {stageTerpilih?.title.toUpperCase() || "Informasi Topik"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="mx-auto text-center">
            {/* Menambahkan text-center */}
            {/* Menampilkan tujuan dari stage yang dipilih */}
            <p className="fw-bold">TUJUAN:</p>
            {tujuan && <p className="mb-0">{tujuan}</p>}
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Link to={`/learn`}>
              <Button variant="outline-primary">BELAJAR</Button>
            </Link>
            <Button
              variant="primary"
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
