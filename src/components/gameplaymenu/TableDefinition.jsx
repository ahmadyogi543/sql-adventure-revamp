import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { FaList } from "react-icons/fa";

import { useGameStateContext } from "../../context/GameStateContext";

const TableDefinition = () => {
  const { dialogs } = useGameStateContext();
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <>
      <div className="d-flex align-items-center gap-2 mx-2 mb-2">
        <div
          id="log"
          className="bg-primary-dark text-white cursor-pointer d-flex flex-grow-1 p-2 rounded"
          title="Daftar riwayat dialog"
          onClick={toggleShow}
        >
          <FaList size={16} />
        </div>
        <pre
          id="table"
          className="small m-0 px-4 py-2 font-sans bg-primary-dark text-custom-yellow-light rounded prescroll"
          style={{ fontFamily: "Nunito" }}
        >
          <span className="me-4 text-decoration-underline">
            <b>biaya</b>{" "}
            <span style={{ color: "white" }}>(id, hari, wisatawan, harga)</span>
          </span>
          <span className="me-4 text-decoration-underline">
            <b>petugas</b>{" "}
            <span style={{ color: "white" }}>
              (id, nama, tugas, lama_bekerja)
            </span>
          </span>
          <span className="me-4 text-decoration-underline">
            <b>fasilitas</b>{" "}
            <span style={{ color: "white" }}>
              (id, nama, jumlah, jenis, status_kelayakan)
            </span>
          </span>
          <span className="me-4 text-decoration-underline">
            <b>tumbuhan</b>{" "}
            <span style={{ color: "white" }}>
              (id, nama, nama_latin, habitat, jumlah, status_konservasi)
            </span>
          </span>
          <span className="text-decoration-underline">
            <b>hewan</b>{" "}
            <span style={{ color: "white" }}>
              (id, nama, nama_latin, jumlah, makanan, habitat, lama_hidup,
              status_konservasi)
            </span>
          </span>
        </pre>
      </div>

      <Offcanvas show={show} onHide={toggleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Riwayat Dialog</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {dialogs.map((dialog, index) => (
            <div
              className="mb-3 p-3 border rounded bg-light"
              key={`offcanvas-dialog-${index}`}
            >
              {dialog}
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TableDefinition;
