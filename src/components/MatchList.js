import React from "react";
import isEmpty from "lodash/isEmpty";
import Match from "./Match";
import Segment from "./reusable/Segment";

// segregated generation of each individual Match into its own function
const getMatchContent = (player, matches) => {
  // check to see if our player object is empty
  if (isEmpty(player)) {
    //if its empty, let the use know
    return <Segment>Search a Summoner name to begin</Segment>;
  } else if (isEmpty(matches)) {
    // if we get no matches back from the summoner search, let the user know
    return <Segment>No Matches Found Yet</Segment>;
  }
  // otherwise lets loop through all the matches (latest 5 at default)
  // pass the props we want from the matches array to the each individual match
  return matches.map((match) => <Match gameID={match.gameId} key={match.gameId} player={player} />);
};

// our MatchList component
const MatchList = ({ player, matches }) => <div className="ui container">{getMatchContent(player, matches)}</div>;

export default MatchList;
