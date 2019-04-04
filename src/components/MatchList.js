import React from "react";
import isEmpty from "lodash/isEmpty";
import Match from "./Match";

const getMatchContent = (player, matches) => {
  if (isEmpty(player)) {
    return <div>Search a Summoner name to begin</div>;
  } else if (isEmpty(matches)) {
    return <div>No Matches Found Yet</div>;
  }
  return matches.map((match) => <Match>I'm a Match!</Match>);
};

const MatchList = ({ player, matches }) => <div className="ui container">{getMatchContent(player, matches)}</div>;

export default MatchList;
