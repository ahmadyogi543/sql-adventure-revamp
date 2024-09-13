import React from "react";
import { FaList } from "react-icons/fa";

const TableDefinition = () => {
  return (
    <div className="d-flex align-items-center gap-2 mx-2 mb-2">
      <div
        id="log"
        className="bg-primary-dark text-white cursor-pointer d-flex flex-grow-1 p-2 rounded"
        title="Daftar riwayat dialog"
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
  );
};

export default TableDefinition;
