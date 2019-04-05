import React from "react";
import SegmentGrid from "../reusable/SegmentGrid";
import RowColumn from "../reusable/RowColumn";
import RowColumnArray from "../reusable/RowColumnArray";

// Section 3 of the Match Details Component.
// Helps clean up Match Details code
const Section3 = ({ level, kda, itemNames }) => {
  return (
    <SegmentGrid color="green">
      <RowColumn headerName={"Level"} headerColor={"teal"} columnData={level} />
      <RowColumn headerName={"K/D/A"} headerColor={"blue"} columnData={kda} />
      <RowColumnArray headerName={"Perks"} headerColor={"blue"} columnData={itemNames} />
    </SegmentGrid>
  );
};

export default Section3;
