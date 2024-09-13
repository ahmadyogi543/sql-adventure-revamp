import React from "react";

import Sad from "../assets/images/sad.jpg";

import { useMenuContext } from "../context/MenuContext";

import AppButton from "../components/AppButton";

import GameplayMenuLayout from "../layouts/GameplayMenuLayout";

export default function CompleteMenu() {
  const { payload, toGameplayMenu, toStageMenu } = useMenuContext();
  // const { score, stageId } = payload.data;
  const score = 100;
  const stageId = 1;

  return (
    <GameplayMenuLayout title="SELESAI">
      <div className="mx-auto p-5">
        <div
          className="px-5 py-4 bg-primary rounded flex-center flex-column"
          style={{ width: 560 }}
        >
          {score >= 80 ? (
            <img
              className="d-block bg-dark p-3 rounded mb-4"
              src="https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_1280.png"
              alt="smile"
              width={280}
            />
          ) : (
            <img
              className="d-block bg-dark p-3 rounded mb-4"
              src={Sad}
              alt="sad"
              width={200}
            />
          )}
          {stageId === 10 && score >= 80 ? (
            <p className="text-white text-center">
              ++ KAMU TELAH MENYELESAIKAN SEMUA TOPIK ++
            </p>
          ) : (
            <p className="text-white text-center">
              ++ KAMU TELAH MENYELESAIKAN TOPIK INI ++
            </p>
          )}

          <p
            className={`text-white text-center p-3 rounded ${
              score >= 80 ? "bg-success" : "bg-danger"
            }`}
          >
            {score >= 80
              ? stageId === 10
                ? "SELAMAT KAMU TELAH MENYELESAIKAN SQL ADVENTURE! TERUS BELAJAR DAN BERLATIH YA :)"
                : "SILAHKAN LANJUT KE TOPIK BERIKUTNYA!"
              : "TAPI MAAF SKOR KAMU MASIH KURANG UNTUK DAPAT LANJUT KE TOPIK BERIKUTNYA. ULANGI LAGI YA!"}
          </p>
        </div>
        <div className="flex-center mt-4">
          {score < 80 ? (
            <AppButton
              className="px-3 py-2 me-3"
              title="ULANGI"
              variant="custom-yellow"
              onClick={() => toGameplayMenu({ data: { id: stageId } })}
            />
          ) : (
            stageId !== 10 && (
              <AppButton
                className="px-3 py-2 me-3"
                title="LANJUT"
                variant="custom-yellow"
                onClick={() => toGameplayMenu({ data: { id: stageId + 1 } })}
              />
            )
          )}
          <AppButton
            className="px-3 py-2 me-3"
            title="KEMBALI"
            variant="custom-green"
            onClick={() => toStageMenu()}
          />
        </div>
      </div>
    </GameplayMenuLayout>
  );
}
