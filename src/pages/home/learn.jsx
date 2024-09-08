import { Col, Container, Row } from "react-bootstrap";

import MATERI from "../../data/materi.json";

import GameplayMenuLayout from "../../layouts/GameplayMenuLayout";
import LearnItem from "../../components/learnmenu/learnItem";

const HomeLearnPage = () => {
 
  return (
    <GameplayMenuLayout title="PILIH MATERI">
      <Container className="p-5">
      <Row className="mb-3 g-4">
          {MATERI.map((materi) => (
            <Col key={`materi-item-${materi.id}`} md={3}>
              <LearnItem
                title={materi.title}
                no={materi.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </GameplayMenuLayout>
  );
};

export default HomeLearnPage;