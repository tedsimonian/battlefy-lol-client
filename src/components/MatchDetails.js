import React from "react";

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
      <div className="ui padded red segment">
        <div className="ui equal width grid">
          <div className="row">
            <h4 className="ui blue header">Player: </h4>
            <div className="column">
              <div>{props.player.name}</div>
            </div>
          </div>
          <div className="row">
            <h4 className="ui blue header">Player: </h4>
            <div className="column">
              <div>{outcome}!</div>
            </div>
          </div>
          <div className="row">
            <h4 className="ui blue header">Player: </h4>
            <div className="column">
              <div>{gameDuration}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui padded blue segment">
        <div className="ui equal width grid">
          <div className="row">
            <h4 className="ui teal header">Champion: </h4>
            <div className="column">
              <div>{champion.name}</div>
            </div>
          </div>
          <div className="row">
            <h4 className="ui blue header">Spells: </h4>
            <div className="column">
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
            </div>
          </div>
          <div className="row">
            <h4 className="ui blue header">Perks: </h4>
            <div className="column">
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
            </div>
          </div>
        </div>
      </div>

      <div className="ui padded green segment">
        <div className="ui equal width grid">
          <div className="row">
            <h4 className="ui teal header">Level: </h4>
            <div className="column">
              <div>{champLevel}</div>
            </div>
          </div>
          <div className="row">
            <h4 className="ui blue header">K/D/A: </h4>
            <div className="column">
              <div>
                {kills}/{deaths}/{assists}
              </div>
            </div>
          </div>
          <div className="row">
            <h4 className="ui blue header">Items: </h4>
            <div className="column">
              <div className="row">
                {/* Loop through our items. Filter out any undefined values then loop and create the jsx */}
                {itemNames
                  .filter((item) => item)
                  .map((item, index) => {
                    return (
                      <div className="column" key={index}>
                        {item}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui padded yellow segment">
        <div className="ui equal width grid">
          <div className="row">
            <h4 className="ui teal header">CPM: </h4>
            <div className="column">
              {/* Since the Creep Score per Minute can have many values after the decimal point, we want to round it to 0-2 decimal points */}
              <div>{Math.round(cpm * 10) / 10}</div>
            </div>
          </div>
          <div className="equal width row">
            <h4 className="ui blue header">TCS: </h4>
            <div className="column">
              <div>{totalCreepScore}</div>
            </div>
            <div className="compact column">
              <div className="ui divider" />
            </div>
            <div className="row">
              <div className="row">
                <div>{minionKills.totalMinionsKilled} TMK</div>
              </div>
              <div className="row">
                <div>{minionKills.neutralMinionsKilled} NMK</div>
              </div>
              <div className="row">
                <div>{minionKills.neutralMinionsKilledTeamJungle} NMKTJ</div>
              </div>
              <div className="row">
                <div>{minionKills.neutralMinionsKilledEnemyJungle} NMKEJ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
