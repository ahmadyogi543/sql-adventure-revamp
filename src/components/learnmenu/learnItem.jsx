import React from "react";
import AppCard from "../AppCard";

export default function LearnItem({ title = "" }) {
  return (
    <div>
      <AppCard
        className="p-4 cursor-pointer position-relative mt-1"
        variant="primary"
      >
        <AppCard
          className="d-flex flex-center px-3 py-2 text-white text-center"
          variant="custom-yellow"
        >
          <span>{title}</span>
        </AppCard>
      </AppCard>
    </div>
  );
}
