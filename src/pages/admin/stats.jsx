import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { FaList } from "react-icons/fa";

import AdminDataTableLayout2 from "../../layouts/AdminDataTableLayout2";
import AdminLayout from "../../layouts/AdminLayout";
import { useAuthContext } from "../../context/AuthContext";
import { getAllUsersProgress } from "../../api/progress";

import { formatDate } from "../../utils/formatDate";

// TODO: integrate data from API
// const body = [
//   {
//     id: 1,
//     email: "ahmadyogi543",
//     name: "Ahmad Yogi",
//     institution: "Universitas Lambung Mangkurat",
//     score: 100,
//     lastAttempted: formatDate(new Date("2024-12-20 12:00:00")),
//   },
// ];

const headers = [
  { title: "No.", prop: "id" },
  { title: "E-mail", prop: "email", isFilterable: true },
  { title: "Nama", prop: "name", isFilterable: true },
  { title: "Institusi", prop: "institution", isFilterable: true },
  { title: "Skor", prop: "score", isFilterable: true },
  { title: "Terakhir Akses", prop: "lastAttempted", isFilterable: true },
  {
    title: "Aksi",
    prop: "action",
    cell: (row) => <MissionDetail data={row.action} />,
  },
];

const AdminStatsPage = () => {
  const { token } = useAuthContext();
  const [body, setBody] = useState([]);
  const [data, setData] = useState([]);

  function handleOnTopicChange(topic) {
    if (topic === "0") {
      setBody([]);
    } else {
      const filteredData = data.map((user) => ({
        ...user,
        values:
          user.values.length === 0
            ? []
            : user.values.filter((stage) => stage.stage_id === parseInt(topic)),
      }));
      const body = filteredData.map((up, index) => ({
        id: index + 1,
        name: up.user_name,
        email: up.user_email,
        institution: up.user_institution,
        score:
          up.values.length !== 0
            ? up.values.find((v) => v.stage_id === parseInt(topic))
              ? up.values.find((v) => v.stage_id === parseInt(topic)).score
              : "-"
            : "-",
        lastAttempted:
          up.values.length !== 0
            ? up.values[0].last_attempted !== null
              ? formatDate(new Date(up.values[0].last_attempted))
              : "-"
            : "-",
        action: up.values.find((v) => v.stage_id === parseInt(topic))
          ? up.values.find((v) => v.stage_id === parseInt(topic))
              .missions_attempted
          : [],
      }));
      setBody(body);
    }
  }

  useEffect(() => {
    getAllUsersProgress(token)
      .then((data) => {
        setData(data.users_progress);
      })
      .catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
  }, []);

  return (
    <AdminLayout title="STATISTIK">
      <AdminDataTableLayout2
        headers={headers}
        body={body}
        onTopicChange={handleOnTopicChange}
      />
    </AdminLayout>
  );
};

const MissionDetail = ({ data }) => {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <Button
        title="Detail Misi"
        onClick={toggleShow}
        size="sm"
        variant="outline-primary"
      >
        <FaList />
      </Button>

      <Modal centered size="lg" show={show} onHide={toggleShow}>
        <Modal.Header className="p-4" closeButton>
          <Modal.Title>DETAIL MISI</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Table className="p-0 m-0" striped bordered>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Misi</th>
                  <th>Percobaan</th>
                  <th>Terakhir Mencoba</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={`missions-attempted-${d.mission_id}`}>
                    <td>{d.mission_id}</td>
                    <td>{d.mission_name}</td>
                    <td>{d.attempt}</td>
                    <td>{formatDate(new Date(d.last_attempted))}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={toggleShow}>
            TUTUP
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminStatsPage;
