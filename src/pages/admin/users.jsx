import { Badge, Button, ButtonGroup } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

import AdminDataTableLayout from "../../layouts/AdminDataTableLayout";
import AdminLayout from "../../layouts/AdminLayout";
import { deleteOneUser, getAllUsers } from "../../api/users";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";

const headers = [
  { title: "No.", prop: "id" },
  { title: "E-mail", prop: "email", isFilterable: true },
  { title: "Nama", prop: "name", isFilterable: true },
  { title: "Institusi", prop: "institution", isFilterable: true },
  // {
  //   title: "Status",
  //   prop: "done",
  //   cell: (row) => (
  //     <Badge bg={row.done ? "success" : "danger"}>
  //       {row.done ? "SELESAI" : "BELUM SELESAI"}
  //     </Badge>
  //   ),
  // },
  {
    title: "Aksi",
    prop: "action",
    cell: (row) => <ActionButtonGroup row={row} id={row.real_id} />,
  },
];

const AdminUsersPage = () => {
  const { token } = useAuthContext();
  const [body, setBody] = useState([]);

  useEffect(() => {
    getAllUsers(token)
      .then((data) =>
        setBody(
          data.users.map((user, index) => ({
            ...user,
            id: index + 1,
            real_id: user.id,
          }))
        )
      )
      .catch((err) => {
        alert(`Kesalahan: terjadi gangguan pada sistem!`);
        console.error(err);
      });
  }, []);

  return (
    <AdminLayout title="PENGGUNA">
      <AdminDataTableLayout headers={headers} body={body} />
    </AdminLayout>
  );
};

const ActionButtonGroup = ({ row }) => {
  const { token } = useAuthContext();

  function handleOnClick() {
    const ok = confirm("Apakah kamu yakin ingin menghapus akun ini?");
    if (!ok) return;

    deleteOneUser(token, row.real_id)
      .then(() => {
        alert("Akun berhasil di hapus, halaman akan dimuat ulang!");
        window.location.reload();
      })
      .catch((err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      });
  }

  return (
    <ButtonGroup>
      <Button title="Edit" size="sm" variant="outline-primary">
        <FaEdit />
      </Button>
      <Button
        onClick={handleOnClick}
        title="Hapus"
        size="sm"
        variant="outline-primary"
      >
        <FaTrashCan />
      </Button>
    </ButtonGroup>
  );
};

export default AdminUsersPage;
