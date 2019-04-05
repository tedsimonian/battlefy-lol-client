import React from "react";

const SegmentGrid = ({ color, children }) => {
  return (
    <div className={`ui padded ${color} segment`}>
      <div className="ui equal width grid">{children}</div>
    </div>
  );
};

export default SegmentGrid;
