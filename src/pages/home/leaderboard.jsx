import { Table } from "react-bootstrap";
import HomeLayout from "../../layouts/HomeLayout";
import { useEffect, useState } from "react";
import { getLeaderboardData } from "../../api/misc";

const HomeLeadboardPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLeaderboardData()
      .then((leaderboardData) => setData(leaderboardData))
      .catch((err) => {
        alert("Kesalahan: maaf terjadi gangguan pada sistem!");
        console.error(err);
      });
  }, []);

  return (
    <HomeLayout>
      <h4 className="fw-bold mb-3">LEADERBOARD</h4>
      <div className="p-3 bg-primary rounded">
        <div className="overflow-y-auto" style={{ height: 440 }}>
          <Table className="m-0" variant="secondary" striped>
            <thead>
              <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Institusi</th>
                <th>Skor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => (
                <tr key={`leaderboard-data-${index}`}>
                  <td>{index + 1}</td>
                  <td>{d.name}</td>
                  <td>{d.institution}</td>
                  <td>{Math.floor(d.score)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomeLeadboardPage;
