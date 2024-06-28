import React from "react";

export const Title = ({ title }) => {
  return (
    <div>
      {" "}
      <h2 className="title">
        <span>{title}</span>
      </h2>
    </div>
  );
};
