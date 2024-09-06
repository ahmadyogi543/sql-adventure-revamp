import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import { useGameStateContext } from "../../context/GameStateContext";

import Typewriter from "../TypeWriter";

export default function TableBoxItem({
  correct,
  data,
  message,
  query,
  scrollToBottom,
}) {
  const [done, setDone] = useState(false);
  const { answered } = useGameStateContext();

  useEffect(() => {
    if (!done) return;
    scrollToBottom();

    if (!correct) return;
    answered();
  }, [done]);

  return (
    <div className="px-4 pb-4">
      <Typewriter
        text={query}
        delay={50}
        setDone={setDone}
        scrollToBottom={scrollToBottom}
      />

      {done && (
        <>
          {data && (
            <div className="w-100 h-100 mb-4 overflow-y-auto">
              <Table className="m-0" striped bordered>
                <thead>
                  <tr>
                    {data.columns.map((column, index) => (
                      <th key={`${column}-${index}`}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.values.map((value, index) => (
                    <tr key={`${value}-${index}`}>
                      {value.map((val, index) => (
                        <td key={`${val}-${index}`}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}

          <div
            className={`fw-bold text-white px-3 py-2 rounded ${
              correct ? "bg-success" : "bg-danger"
            }`}
          >
            {message}
          </div>
        </>
      )}
    </div>
  );
}
