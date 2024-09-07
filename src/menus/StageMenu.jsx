import { Col, Container, Row } from "react-bootstrap";

import { useMenuContext } from "../context/MenuContext";
import GameplayMenuLayout from "../layouts/GameplayMenuLayout";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { getStageData } from "../api/progress";

const StageMenu = () => {
  const { token, user } = useAuthContext();
  const { toGameplayMenu } = useMenuContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    getStageData(token, user.id)
      .then((data) => setData(data))
      .catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
  }, []);

  return (
    <GameplayMenuLayout title="PILIH TOPIK">
      <Container className="p-5">
        <Row className="g-4 gap-2">
          {data.map((d) => (
            <Col className="flex-center flex-column" key={`stage-menu-${d.id}`}>
              <img
                onClick={() => toGameplayMenu({ data: d })}
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
      </Container>
    </GameplayMenuLayout>
  );
};

export default StageMenu;
