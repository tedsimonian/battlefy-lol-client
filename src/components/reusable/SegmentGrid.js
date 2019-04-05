import React from "react";

// Reusable component using Semantic UI classes
const SegmentGrid = ({ color, children }) => {
  return (
    <div className={`ui padded ${color} segment`}>
      {/* Render the children passed into this component */}
      <div className="ui equal width grid">{children}</div>
    </div>
  );
};

export default SegmentGrid;
