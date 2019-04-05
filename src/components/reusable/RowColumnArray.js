import React from "react";

// Reusable component using Semantic UI classes
const RowColumnArray = ({ headerName, headerColor, columnData }) => {
  return (
    <div className="row">
      <h4 className={`ui ${headerColor} header`}>{headerName}: </h4>
      <div className="row">
        {/* Loop through our array . Filter out any undefined values then loop and create the jsx */}
        {columnData
          .filter((item) => item)
          .map((item, index) => {
            return (
              <div className="column" key={index}>
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RowColumnArray;
