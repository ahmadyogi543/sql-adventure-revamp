import React from "react";

import Lock from "../../assets/images/lock.png";

import AppCard from "../AppCard";

export default function TopicItem({ onClick, level, title = "" }) {
  return (
    <div onClick={title === "TOPIC" ? () => {} : onClick}>
      <AppCard
        className="px-5 py-4 cursor-pointer position-relative mt-4"
        variant={`${title === "TOPIC" ? "disabled" : "light-custom-green"}`}
      >
        <div
          className={`d-flex flex-center text-white fw-bold rounded-circle shadow-card-${
            title === "TOPIC" ? "light-disabled" : "custom-green"
          } position-absolute`}
          style={{
            width: 48,
            height: 48,
            backgroundColor: `var(--bs-${
              title === "TOPIC" ? "light-disabled" : "custom-green"
            })`,
            top: -36,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <span className={`${title === "TOPIC" ? "opacity-0" : ""}`}>
            {level}
          </span>
        </div>
        <img
          className={`position-absolute ${
            title === "TOPIC" ? "" : "opacity-0"
          }`}
          src={Lock}
          alt="lock"
          width={40}
          style={{
            top: -36,
            right: -20,
          }}
        />
        <AppCard
          className="d-flex flex-center px-3 py-2 text-white fw-bold"
          variant={`${title === "TOPIC" ? "light-disabled" : "custom-green"}`}
        >
          <span>{title}</span>
        </AppCard>
      </AppCard>
    </div>
  );
}
