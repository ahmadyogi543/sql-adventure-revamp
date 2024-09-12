// learnItem.jsx
import React from "react";

export default function LearnItem({ title = "", imageUrl = "" }) {
  return (
    <div className="cursor-pointer">
      <img
        src={imageUrl}
        alt={title}
        className="img-fluid rounded"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="mt-2 text-center">
        <span>{title}</span>
      </div>
    </div>
  );
}