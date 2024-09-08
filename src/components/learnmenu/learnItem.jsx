import React from "react";
import AppCard from "../AppCard";

export default function LearnItem({ onClick, title = "" }) {
  return (
    <div onClick={onClick}>
      <AppCard
        className="px-3 py-3 cursor-pointer position-relative mt-1"
        variant="custom-yellow-dark"
      >
        <AppCard
          className="d-flex flex-center px-3 py-2 text-white"
          variant="custom-yellow"
        >
          <span>{title}</span>
        </AppCard>
      </AppCard>
    </div>
  );
}