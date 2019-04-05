import React from "react";
import Section1 from "./details/Section1";
import Section2 from "./details/Section2";
import Section3 from "./details/Section3";
import Section4 from "./details/Section4";

// our Match Details Component.
// This component is responsible for rendering out all the details of the player stats we care for
const MatchDetails = (props) => {
  // destructure our props for cleaner code use
  const {
    matchDetails: { outcome, gameDuration, champLevel, kills, deaths, assists, cpm, totalCreepScore, minionKills },
    champion,
    summonerSpellNames,
    itemNames,
    perkNames
  } = props;

  return (
    <div className="ui horizontal segments">
      <Section1 name={props.player.name} outcome={outcome} gameDuration={gameDuration} />
      <Section2 name={champion.name} summonerSpellNames={summonerSpellNames} perkNames={perkNames} />
      <Section3 level={champLevel} kda={`${kills}/${deaths}/${assists}`} itemNames={itemNames} />
      {/* Since the Creep Score per Minute can have many values after the decimal point, we want to round it to 0-2 decimal points */}
      <Section4 cpm={Math.round(cpm * 10) / 10} tcs={totalCreepScore} minionKills={minionKills} />
    </div>
  );
};

export default MatchDetails;
