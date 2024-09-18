import React, { useState } from "react";
import GameplayMenuLayout from "../../layouts/GameplayMenuLayout";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

// Import komponen yang telah dibuat
import GameInfo from "../../components/about/gameInfo";
import PenelitiInfo from "../../components/about/penelitiInfo";
import SumberDataInfo from "../../components/about/sumberDataInfo";


// Konstanta untuk tab yang tersedia
const tabs = [
  { id: "game", label: "Game" },
  { id: "peneliti", label: "Peneliti" },
  { id: "sumber", label: "Sumber Data" }
];

const HomeSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("game"); // State untuk mengatur tab aktif

  // Konten yang akan ditampilkan berdasarkan tab yang aktif
  const renderContent = () => {
    switch (activeTab) {
      case "game":
        return <GameInfo />;
      case "peneliti":
        return <PenelitiInfo />;
      case "sumber":
        return <SumberDataInfo />;
      default:
        return <p>Pilih kategori untuk melihat informasi.</p>;
    }
  };

  return (
    <GameplayMenuLayout title="TENTANG">
      <Container className="p-3">
        <Row className="justify-content-center">
          <Col md={12}> 
            <div className="d-flex justify-content-between mb-4 gap-2">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  className="w-100"
                  variant={activeTab === tab.id ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
            <Card>
              <Card.Body>
                {renderContent()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </GameplayMenuLayout>
  );
};

export default HomeSettingsPage;