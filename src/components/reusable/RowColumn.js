import React from "react";

// Reusable component using Semantic UI classes
const RowColumn = ({ headerName, headerColor, columnData, children }) => {
  // Check to see if we have and data coming in
  // if we don't, just render any children passed in
  const hasColumnData = (columnData, children) => {
    return columnData ? <div>{columnData}</div> : children;
  };

  return (
    <div className="row">
      <h4 className={`ui ${headerColor} header`}>{headerName}: </h4>
      <div className="column">{hasColumnData(columnData, children)}</div>
    </div>
  );
};

export default RowColumn;
