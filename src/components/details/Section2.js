import React from "react";
import SegmentGrid from "../reusable/SegmentGrid";
import RowColumn from "../reusable/RowColumn";

const Section2 = ({ name, summonerSpellNames, perkNames }) => {
  return (
    <SegmentGrid color="blue">
      <RowColumn headerName={"Champion"} headerColor={"teal"} columnData={name} />
      <RowColumn headerName={"Spells"} headerColor={"blue"}>
        <div className="row">
          {/* Loop through our summoner spells. Filter out any undefined values then loop and create the jsx */}
          {summonerSpellNames
            .filter((spell) => spell)
            .map((spell, index) => {
              return (
                <div className="column" key={index}>
                  {spell}
                </div>
              );
            })}
        </div>
      </RowColumn>
      <RowColumn headerName={"Perks"} headerColor={"blue"}>
        <div className="row">
          {/* Loop through our perks(masteries). Filter out any undefined values then loop and create the jsx */}
          {perkNames
            .filter((perk) => perk)
            .map((perk, index) => {
              return (
                <div className="column" key={index}>
                  {perk}
                </div>
              );
            })}
        </div>
      </RowColumn>
    </SegmentGrid>
  );
};

export default Section2;
