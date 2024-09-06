import React from "react";

import Stars from "../assets/images/stars.png";

import { useMenuContext } from "../context/MenuContext";

import AppButton from "../components/AppButton";

import GameplayMenuLayout from "../layouts/GameplayMenuLayout";

export default function CompleteMenu() {
  const { toStageMenu } = useMenuContext();

  return (
    <GameplayMenuLayout title="SELESAI">
      <div className="mx-auto p-5">
        <div
          className="px-5 py-4 bg-primary rounded flex-center flex-column"
          style={{ width: 480 }}
        >
          <img
            className="d-block bg-dark p-3 rounded mb-4"
            src={Stars}
            alt="stars"
            width={320}
          />
          <p className="text-white text-center">
            SELAMAT, KAMU TELAH MENYELESAIKAN TOPIK INI. SILAHKAN LANJUT KE
            TOPIK LAINNYA!
          </p>
        </div>
        <div className="flex-center mt-4">
          <AppButton
            className="px-3 py-2 me-3"
            title="KEMBALI"
            variant="custom-yellow"
            onClick={() => toStageMenu()}
          />
          <AppButton
            className="px-3 py-2"
            title="LANJUT"
            variant="custom-green"
          />
        </div>
      </div>
    </GameplayMenuLayout>
  );
}
