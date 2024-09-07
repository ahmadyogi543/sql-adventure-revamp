import { useEffect, useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { TbReload } from "react-icons/tb";

import AdminDataTableLayout from "../../layouts/AdminDataTableLayout";
import AdminLayout from "../../layouts/AdminLayout";
import { useAuthContext } from "../../context/AuthContext";
import { getAllUsersProgress } from "../../api/progress";

const headers = [
  { title: "No.", prop: "id" },
  { title: "E-mail", prop: "email", isFilterable: true },
  { title: "Nama", prop: "name", isFilterable: true },
  { title: "Institusi", prop: "institution", isFilterable: true },
  {
    title: "Progress Pengguna",
    prop: "progress",
    cell: (row) => <UserProgressBar progress={row.progress} />,
  },
  {
    title: "Aksi",
    prop: "action",
    cell: () => (
      <Button size="sm" title="Reset" variant="outline-primary">
        <TbReload />
      </Button>
    ),
  },
];

const AdminProgressPage = () => {
  const { token } = useAuthContext();
  const [body, setBody] = useState([]);

  useEffect(() => {
    function calculateProgress(data) {
      const totalStages = 10;

      if (!data.values || data.values.length === 0) {
        return 0;
      }

      let overallProgress = 0;
      data.values.forEach((stage) => {
        let noOfMissions = stage.no_of_missions;
        let missionsAttempted = stage.missions_attempted.length;

        let stageProgress = (missionsAttempted / noOfMissions) * 100;
        overallProgress += stageProgress;
      });

      return (overallProgress / totalStages).toFixed(2);
    }

    getAllUsersProgress(token)
      .then((data) => {
        const body = data.users_progress.map((up, index) => ({
          id: index + 1,
          name: up.user_name,
          email: up.user_email,
          institution: up.user_institution,
          progress: calculateProgress(up),
        }));
        setBody(body);
      })
      .catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
  }, []);

  return (
    <AdminLayout title="PROGRESS">
      <AdminDataTableLayout headers={headers} body={body} />
    </AdminLayout>
  );
};

const UserProgressBar = ({ progress }) => (
  <ProgressBar
    className="mt-1"
    label={`${progress}%`}
    now={progress}
    variant={
      progress >= 35
        ? progress >= 65
          ? progress >= 85
            ? "success"
            : "info"
          : "warning"
        : "danger"
    }
  />
);

export default AdminProgressPage;
