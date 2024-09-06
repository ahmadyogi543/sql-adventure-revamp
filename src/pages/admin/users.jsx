import { Badge, Button, ButtonGroup } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

import AdminDataTableLayout from "../../layouts/AdminDataTableLayout";
import AdminLayout from "../../layouts/AdminLayout";

// TODO: integrate data from API
const body = [
  {
    id: 1,
    email: "ahmadyogi543@gmail.com",
    name: "Ahmad Yogi",
    institution: "Universitas Lambung Mangkurat",
    done: false,
  },
];

const headers = [
  { title: "No.", prop: "id" },
  { title: "E-mail", prop: "email", isFilterable: true },
  { title: "Nama", prop: "name", isFilterable: true },
  { title: "Institusi", prop: "institution", isFilterable: true },
  {
    title: "Status",
    prop: "done",
    cell: (row) => (
      <Badge bg={row.done ? "success" : "danger"}>
        {row.done ? "SELESAI" : "BELUM SELESAI"}
      </Badge>
    ),
  },
  {
    title: "Aksi",
    prop: "action",
    cell: () => <ActionButtonGroup />,
  },
];

const AdminUsersPage = () => {
  return (
    <AdminLayout title="PENGGUNA">
      <AdminDataTableLayout headers={headers} body={body} />
    </AdminLayout>
  );
};

const ActionButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button title="Edit" size="sm" variant="outline-primary">
        <FaEdit />
      </Button>
      <Button title="Hapus" size="sm" variant="outline-primary">
        <FaTrashCan />
      </Button>
    </ButtonGroup>
  );
};

export default AdminUsersPage;
