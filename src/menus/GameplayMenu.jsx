import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaQuestion, FaTable } from "react-icons/fa";

import STORIES from "../data/stories.json";

import { GameStateContextProvider } from "../context/GameStateContext";
import { useMenuContext } from "../context/MenuContext";
import { useAuthContext } from "../context/AuthContext";

import GameplayMenuLayout from "../layouts/GameplayMenuLayout";
import CharaBox from "../components/gameplaymenu/CharaBox";
import IntroBox from "../components/gameplaymenu/IntroBox";
import TableBox from "../components/gameplaymenu/TableBox";
import QueryBox from "../components/gameplaymenu/QueryBox";
import useSQLExecutor from "../hooks/useSQLExecutor";
import { attemptStage } from "../api/progress";
import { FaTableList } from "react-icons/fa6";

export default function GameplayMenu() {
  const { payload } = useMenuContext();
  const { token, user } = useAuthContext();
  const story = STORIES.find((story) => story.id === payload.data.id);

  if (!story) return;

  const { exec, check, validate, loading } = useSQLExecutor(story.filepath);

  useEffect(() => {
    attemptStage(token, user.id, story.id, story.missions.length).catch(
      (err) => {
        alert("Kesalahan: terjadi gangguan pada sistem!");
        console.error(err);
      }
    );
  }, []);

  return (
    <>
      {!loading && (
        <GameStateContextProvider>
          <GameplayMenuLayout title="BERMAIN">
            <div className="flex-column-grow p-3">
              <Row className="d-flex flex-grow-1">
                <Col className="d-flex flex-column pe-0" md={6}>
                  <CharaBox
                    id={story.id}
                    title={story.title}
                    missions={story.missions}
                  />
                </Col>
                <Col className="d-flex flex-column" md={6}>
                  <TableBox />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="mt-3">
                  <QueryBox
                    stageId={story.id}
                    missions={story.missions}
                    exec={exec}
                    check={check}
                    validate={validate}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <pre
                className="small m-0 px-4 py-2 font-sans bg-primary-dark text-custom-yellow-light rounded prescroll"
                style={{ fontFamily: "Nunito" }}
              >
                <span className="me-4 text-decoration-underline">
                  <b>biaya</b>{" "}
                  <span style={{ color: "white" }}>
                    (id, hari, wisatawan, harga)
                  </span>
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
            <IntroBox
              stageId={story.id}
              title={story.title}
              introduction={story.introduction}
              closing={story.closing}
            />
          </GameplayMenuLayout>
        </GameStateContextProvider>
      )}
    </>
  );
}
