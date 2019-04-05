import React from "react";
import SegmentGrid from "../reusable/SegmentGrid";
import RowColumn from "../reusable/RowColumn";

const Section1 = ({ name, outcome, gameDuration }) => {
  return (
    <SegmentGrid color="red">
      <RowColumn headerName={"Player"} headerColor={"teal"} columnData={name} />
      <RowColumn headerName={"Outcome"} headerColor={"blue"} columnData={`${outcome}!`} />
      <RowColumn headerName={"Game Duration"} headerColor={"blue"} columnData={gameDuration} />
    </SegmentGrid>
  );
};

export default Section1;
