import React from "react";

const Segment = (props) => {
  return (
    <div className="ui segment">
      <div>{props.children}</div>
    </div>
  );
};

export default Segment;
