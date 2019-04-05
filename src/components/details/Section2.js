import React from "react";
import SegmentGrid from "../reusable/SegmentGrid";
import RowColumn from "../reusable/RowColumn";
import RowColumnArray from "../reusable/RowColumnArray";

// Section 2 of the Match Details Component.
// Helps clean up Match Details code
const Section2 = ({ name, summonerSpellNames, perkNames }) => {
  return (
    <SegmentGrid color="blue">
      <RowColumn headerName={"Champion"} headerColor={"teal"} columnData={name} />
      <RowColumnArray headerName={"Spells"} headerColor={"blue"} columnData={summonerSpellNames} />
      <RowColumnArray headerName={"Perks"} headerColor={"blue"} columnData={perkNames} />
    </SegmentGrid>
  );
};

export default Section2;
