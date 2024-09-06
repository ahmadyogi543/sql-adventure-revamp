import React, { forwardRef } from "react";

const AppCard = forwardRef((props, ref) => {
  const { children, className = "", style, variant } = props;
  return (
    <div
      ref={ref}
      className={`rounded bg-${variant} shadow-card-${variant} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
});

export default AppCard;
