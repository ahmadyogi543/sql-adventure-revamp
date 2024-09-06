import { Button, ProgressBar } from "react-bootstrap";
import { TbReload } from "react-icons/tb";

import AdminDataTableLayout from "../../layouts/AdminDataTableLayout";
import AdminLayout from "../../layouts/AdminLayout";

// TODO: integrate data from API
const body = [
  {
    id: 1,
    username: "ahmadyogi543",
    name: "Ahmad Yogi",
    institution: "Universitas Lambung Mangkurat",
    progress: 30,
  },
];

const headers = [
  { title: "No.", prop: "id" },
  { title: "Nama Pengguna", prop: "username", isFilterable: true },
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
