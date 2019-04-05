import React from "react";
import SegmentGrid from "../reusable/SegmentGrid";
import RowColumn from "../reusable/RowColumn";
import Row from "../reusable/Row";

const Section4 = ({ cpm, tcs, minionKills }) => {
  return (
    <SegmentGrid color="yellow">
      <RowColumn headerName={"Creeps Per Min"} headerColor={"teal"} columnData={cpm} />
      <RowColumn headerName={"Total Creep Score"} headerColor={"blue"} columnData={tcs} />
      <RowColumn headerName={"Break Down"} headerColor={"blue"}>
        <Row>
          <Row label={"TMK"} value={minionKills.totalMinionsKilled} />
          <Row label={"NMK"} value={minionKills.neutralMinionsKilled} />
          <Row label={"NMKTJ"} value={minionKills.neutralMinionsKilledTeamJungle} />
          <Row label={"NMKEJ"} value={minionKills.neutralMinionsKilledEnemyJungle} />
        </Row>
      </RowColumn>
    </SegmentGrid>
  );
};

export default Section4;
