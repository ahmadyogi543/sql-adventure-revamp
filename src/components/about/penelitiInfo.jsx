import { Row, Col, Card } from "react-bootstrap";
import foto1 from "../../../public/images/about/pa_novan.jpg";
import foto2 from "../../../public/images/about/pa_harja.png";
import foto3 from "../../../public/images/about/pa_wira.jpeg";
import foto4 from "../../../public/images/about/pa_rizky.png";
import foto5 from "../../../public/images/about/iif.jpg";
import foto6 from "../../../public/images/about/husna.png";

const PenelitiInfo = () => {
  const peneliti = [
    {
      name: "Novan Alkaf Bahraini Saputra, S.Kom., M.T.",
      photo: foto1,
      nomor: "199311102020121008",
      role: "Ketua Penelitian"
    },
    {
      name: "Dr. Harja Santana Purba, M.Kom.",
      photo: foto2,
      nomor: "196307051989031002",
      role: "Anggota Penelitian"
    },
    {
      name: "Nuruddin Wiranda, S.Kom., M.Cs.",
      photo: foto3,
      nomor: "19900315201608101001",
      role: "Anggota Penelitian"
    },
    {
      name: "Rizky Pamuji, S.Kom., M.Kom.",
      photo: foto4,
      nomor: "199406012022031007",
      role: "Anggota Penelitian"
    },
    {
      name: "Iif Alifah",
      photo: foto5,
      nomor: "2110131220013",
      role: "Anggota Penelitian"
    },
    {
      name: "Risalatul Husna",
      photo: foto6,
      nomor: "2110131120008",
      role: "Anggota Penelitian"
    },
  ];

  const imageStyle = {
    width: "150px", // Ukuran lebar foto yang sama
    height: "150px", // Ukuran tinggi foto yang sama
    objectFit: "cover", // Menjaga rasio aspek foto
    margin: "0 auto" // Agar foto berada di tengah
  };

  // Menambahkan gaya untuk shadow, border, dan efek hover
  const cardStyle = {
    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px", // Membuat card sedikit melengkung di sudutnya
    border: "2px solid #ddd",
    overflow: "hidden" // Menghindari konten melebihi border
  };

  return (
    <div>
      <h3>Peneliti</h3>
      {/* Baris pertama dengan 4 peneliti */}
      <Row>
        {peneliti.slice(0, 4).map((peneliti, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card
              style={cardStyle}
              className="hover-effect"
            >
              <Card.Img variant="top" src={peneliti.photo} alt={`Foto ${peneliti.name}`} style={imageStyle} />
              <Card.Body>
                <Card.Title>{peneliti.name}</Card.Title>
                <Card.Text>{peneliti.nomor}</Card.Text>
                <Card.Text><strong>{peneliti.role}</strong></Card.Text> {/* Menampilkan peran */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Baris kedua dengan 2 peneliti */}
      <Row>
        {peneliti.slice(4).map((peneliti, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card
              style={cardStyle}
              className="hover-effect"
            >
              <Card.Img variant="top" src={peneliti.photo} alt={`Foto ${peneliti.name}`} style={imageStyle} />
              <Card.Body>
                <Card.Title>{peneliti.name}</Card.Title>
                <Card.Text>{peneliti.nomor}</Card.Text>
                <Card.Text><strong>{peneliti.role}</strong></Card.Text> {/* Menampilkan peran */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <style>
        {`
          .hover-effect {
            border: 2px solid #ddd; /* Border default */
          }

          .hover-effect:hover {
            transform: scale(1.05); /* Efek timbul */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Efek bayangan lebih kuat saat di-hover */
            border-color: #007bff; /* Border warna biru saat di-hover */
          }
        `}
      </style>
    </div>
  );
};

export default PenelitiInfo;