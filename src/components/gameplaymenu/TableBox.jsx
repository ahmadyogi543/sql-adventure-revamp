import React, { useEffect, useRef, useState } from "react";

import { useGameStateContext } from "../../context/GameStateContext";
import useFullscreenStatus from "../../hooks/useFullscreenStatus";

import AppCard from "../AppCard";
import TableBoxItem from "./TableBoxItem";

export default function TableBox() {
  const ref = useRef(null);

  const [fsHeight, setFsHeight] = useState(0);
  const [normalHeight, setNormalHeight] = useState(0);

  const isFullscreen = useFullscreenStatus();
  const { results } = useGameStateContext();

  const scrollToBottom = () => {
    if (!ref.current) return;
    ref.current.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!ref.current) return;

    if (normalHeight !== 0 && fsHeight !== 0) return;

    if (!isFullscreen) {
      setNormalHeight(ref.current.clientHeight - 68);
    } else {
      setFsHeight(ref.current.clientHeight);
    }
  }, [isFullscreen]);

  return (
    <>
      <h5 className="rounded fw-bold text-primary text-decoration-underline mb-3">
        OUTPUT
      </h5>
      <AppCard
        ref={ref}
        className="d-flex flex-column flex-grow-1 overflow-y-auto"
        variant="white"
      >
        <div
          className="pt-4"
          style={{ height: isFullscreen ? fsHeight : normalHeight }}
        >
          {results.map((result, index) => (
            <TableBoxItem
              key={`table-box-item-${index}`}
              correct={result.correct}
              data={result.data}
              message={result.message}
              query={result.query}
              scrollToBottom={scrollToBottom}
            />
          ))}
        </div>
      </AppCard>
    </>
  );
}
