import React from "react";

const RowColumn = ({ headerName, headerColor, columnData, children }) => {
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
