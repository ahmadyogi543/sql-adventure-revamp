import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

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
import TableDefinition from "../components/gameplaymenu/TableDefinition";

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
                <Col id="output" className="d-flex flex-column" md={6}>
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
            <TableDefinition />
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
