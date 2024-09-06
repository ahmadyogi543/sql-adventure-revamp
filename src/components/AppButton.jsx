import React from "react";
import AppCard from "./AppCard";

export default function AppButton({
  children = null,
  className,
  disabled = false,
  title,
  variant,
  onClick,
}) {
  return (
    <div onClick={!disabled ? onClick : () => {}}>
      <AppCard
        className={`d-flex flex-center ${
          disabled ? "opacity-50" : "cursor-pointer"
        } ${className}`}
        variant={variant}
      >
        {children ?? <span className="text-white fw-bold p-1">{title}</span>}
      </AppCard>
    </div>
  );
}
