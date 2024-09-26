import { Col, Container, Row } from "react-bootstrap";
import MATERI from "../../data/materi.json";
import GameplayMenuLayout from "../../layouts/GameplayMenuLayout";
import LearnItem from "../../components/learnmenu/learnItem";
import { Link } from "react-router-dom";

// Definisikan kelompok materi
const kelompokMateri = {
  "Dasar Kueri SQL": ["SQL","SELECT", "DISTINCT", "ALIAS"],
  "Penyaringan Data": ["WHERE", "AND", "OR", "NOT", "LIKE", "IN", "BETWEEN"],
  "Pengelompokan dan Pengurutan Data": ["ORDER BY", "GROUP BY"],
  "Penggunaan Nilai Khusus dan Fungsi Agregat": ["NULL VALUES", "MIN MAX", "COUNT", "SUM", "AVG"],
  "Manipulasi Data": ["INSERT", "UPDATE", "DELETE"],
  "Operasi Lanjutan": ["SUBQUERY", "LIMIT"],
  "Penggunaan Operator": ["OPERATOR PERBANDINGAN", "OPERATOR ARITMATIKA"]
};

// Helper function to match materi title from kelompokMateri
const getMateriItems = (materiTitles) => {
  return MATERI.filter((materi) => materiTitles.includes(materi.slug.toUpperCase().replace(/_/g, " ")));
};

const HomeLearnPage = () => {
  return (
    <GameplayMenuLayout title="PILIH MATERI">
      <Container className="p-5">
        {Object.entries(kelompokMateri).map(([kelompok, materiTitles]) => (
          <div key={kelompok} className="mb-5">
          <h4 className="mb-4 text-center" style={{ backgroundColor: '#FFE5CF', padding: '10px', borderRadius: '5px' }}>
            {kelompok}
          </h4>
            <Row className="mb-3 g-4">
              {getMateriItems(materiTitles).map((materi) => (
                <Col key={`materi-item-${materi.id}`} xs={6} md={4} lg={3} xl={2}>
                  <Link
                    className="text-decoration-none"
                    to={`/learn/${materi.slug}`}
                  >
                    <LearnItem title={materi.title} imageUrl={materi.imageUrl} />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </GameplayMenuLayout>
  );
};

export default HomeLearnPage;
