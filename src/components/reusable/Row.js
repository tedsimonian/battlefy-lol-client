import React from "react";

const Row = ({ label, value, children }) => {
  const hasData = (label, value) => {
    return label && value ? (
      <div>
        {value} {label}
      </div>
    ) : (
      children
    );
  };

  return <div className="row">{hasData(label, value)}</div>;
};

export default Row;
