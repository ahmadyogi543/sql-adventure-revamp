import { Col, Row } from "react-bootstrap";
import { FaChartPie, FaUsers } from "react-icons/fa";

import AdminLayout from "../../layouts/AdminLayout";
import DashboardCard from "../../components/admin/DashboardCard";
import DashboardCard2 from "../../components/admin/DashboardCard2";
import { useEffect, useState } from "react";
import { getDashboardData } from "../../api/admin";
import { useAuthContext } from "../../context/AuthContext";

const INITIAL_DATA = {
  no_of_users: 0,
  no_of_users_done: 0,
  scores: {
    lowest: [],
    average: [],
    highest: [],
  },
};

const AdminDashboardPage = () => {
  const { token } = useAuthContext();
  const [data, setData] = useState(INITIAL_DATA);

  useEffect(() => {
    getDashboardData(token)
      .then((data) => setData(data))
      .catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
  }, []);

  return (
    <AdminLayout title="DASHBOARD">
      <Row className="g-2 mb-2">
        <Col md={6}>
          <DashboardCard
            icon={<FaUsers size={28} />}
            title="JUMLAH PENGGUNA"
            subtitle={`${data.no_of_users} PENGGUNA`}
            variant="primary text-white"
          />
        </Col>
        <Col>
          <DashboardCard
            icon={<FaChartPie size={28} />}
            title="STATUS PENGGUNA"
            subtitle={`${data.no_of_users_done}/${data.no_of_users} SELESAI`}
            variant="warning"
          />
        </Col>
      </Row>
      <Row className="g-2">
        <Col md={4}>
          <DashboardCard2 title="SKOR RATA-RATA" variant="info text-white">
            <Row>
              {data.scores.average.map((value, index) => (
                <Col key={`scores-average-item-${index}`} md={6}>
                  TOPIK {index + 1}: {value}
                </Col>
              ))}
            </Row>
          </DashboardCard2>
        </Col>
        <Col>
          <DashboardCard2 title="SKOR TERTINGGI" variant="success text-white">
            <Row>
              {data.scores.highest.map((value, index) => (
                <Col key={`scores-highest-item-${index}`} md={6}>
                  TOPIK {index + 1}: {value}
                </Col>
              ))}
            </Row>
          </DashboardCard2>
        </Col>
        <Col>
          <DashboardCard2 title="SKOR TERENDAH" variant="danger text-white">
            <Row>
              {data.scores.lowest.map((value, index) => (
                <Col key={`scores-lowest-item-${index}`} md={6}>
                  TOPIK {index + 1}: {value}
                </Col>
              ))}
            </Row>
          </DashboardCard2>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
