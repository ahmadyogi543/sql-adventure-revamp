import { Button, Table } from "react-bootstrap";
import HomeLayout from "../../layouts/HomeLayout";

const DATA = [
  {
    name: "Siti Rahmawati",
    institution: "Universitas Padjadjaran",
    score: 92,
  },
  {
    name: "Fajar Nugroho",
    institution: "Universitas Brawijaya",
    score: 88,
  },
  {
    name: "Rina Suryani",
    institution: "Universitas Gadjah Mada",
    score: 85,
  },
  {
    name: "Lina Maulida",
    institution: "Universitas Airlangga",
    score: 78,
  },
  {
    name: "Nurul Aisyah",
    institution: "Universitas Hasanuddin",
    score: 73,
  },
  {
    name: "Budi Santoso",
    institution: "Universitas Indonesia",
    score: 70,
  },
  {
    name: "Dedi Pratama",
    institution: "Universitas Diponegoro",
    score: 65,
  },
  {
    name: "Eka Saputra",
    institution: "Universitas Sebelas Maret",
    score: 60,
  },
  {
    name: "Wawan Kurniawan",
    institution: "Universitas Syiah Kuala",
    score: 50,
  },
  {
    name: "Ahmad Yogi",
    institution: "Universitas Lambung Mangkurat",
    score: 20,
  },
];

const HomeLeadboardPage = () => {
  return (
    <HomeLayout>
      <div className="p-3 bg-primary rounded">
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
            {DATA.map((d, index) => (
              <tr key={`leaderboard-data-${index}`}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.institution}</td>
                <td>{d.score}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </HomeLayout>
  );
};

export default HomeLeadboardPage;
