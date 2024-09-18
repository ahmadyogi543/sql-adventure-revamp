import { Row, Col, Card } from "react-bootstrap";
import foto2 from "../../assets/images/pa_wira.jpg"
import foto3 from "../../assets/images/pa_novan.jpg";

const PenelitiInfo = () => {
  const peneliti = [
    {
      name: "Dr. Harja Santana Purba, M.Kom.",
      photo: "url-to-photo-1",
      nomor: "196307051989031002"
    },
    {
      name: "Nuruddin Wiranda, S.Kom., M.Cs.",
      photo: foto2,
      nomor: "19900315201608101001"
    },
    {
      name: "Novan Alkaf Bahraini Saputra, S.Kom., M.T.",
      photo: foto3,
      nomor: "199311102020121008"
    },
    {
      name: "Rizky Pamuji, S.Kom., M.Kom.",
      photo: "url-to-photo-4",
      nomor: "199406012022031007"
    },
    {
      name: "Iif Alifah",
      photo: "url-to-photo-5",
      nomor: "2110131220013"
    },
    {
      name: "Risalatul Husna",
      photo: "url-to-photo-6",
      nomor: "21101"
    },
  ];

  return (
    <div>
      <h3>Peneliti</h3>
      <Row>
        {peneliti.map((peneliti, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={peneliti.photo} alt={`Foto ${peneliti.name}`} />
              <Card.Body>
                <Card.Title>{peneliti.name}</Card.Title>
                <Card.Text>{peneliti.nomor}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PenelitiInfo;