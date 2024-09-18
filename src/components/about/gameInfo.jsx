import React from "react";
import { Container } from "react-bootstrap";
import gameImage from "../../assets/images/title_start_menu.png"; // Pastikan path gambar sesuai

const GameInfo = () => {
  return (
    <Container>
      <div className="mb-4 shadow-sm p-3">
        <div className="d-flex justify-content-center">
          <img src={gameImage} alt="Game Image" style={{ width: '250px' }} />
        </div>
        <h3 className="mt-3">Tentang Game</h3>
        <p>
          Aplikasi game edukasi ini bertujuan untuk mengajarkan materi SQL 
          dengan pendekatan lingkungan lahan basah di Pulau Kembang, Kalimantan Selatan. 
          Pemain akan belajar konsep dasar hingga lanjutan SQL melalui misi yang terinspirasi 
          dari kegiatan konservasi, penelusuran data flora dan fauna, serta manajemen sumber daya.
        </p>
        <p>
          Game ini dirancang untuk meningkatkan pemahaman pemain dalam menggunakan SQL dalam konteks nyata 
          yang terintegrasi dengan lingkungan alam, khususnya ekosistem lahan basah yang unik di Kalimantan Selatan.
        </p>
      </div>
    </Container>
  );
};

export default GameInfo;
