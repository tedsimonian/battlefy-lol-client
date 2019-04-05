import React from "react";

// Reusable component using Semantic UI classes
const Segment = (props) => {
  return (
    <div className="ui segment">
      {/* render out the children passed into this component */}
      <div>{props.children}</div>
    </div>
  );
};

export default Segment;
