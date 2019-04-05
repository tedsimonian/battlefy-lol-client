import React from "react";

// Reusable component using Semantic UI classes
const Row = ({ label, value, children }) => {
  // check to see if we have any data being passed in
  const hasData = (label, value) => {
    // if we don't, return any children passed into this component
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
