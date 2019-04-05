import React, { useState } from "react";
import { getExtractedMatchDetails } from "../utils";
import { getMatchById, getSummonerSpellNames, getItemNames, getPerkNames, getChampionById } from "../api/helper";
import { useDeepCompareEffect } from "../utils/deepcompare";
import MatchDetails from "./MatchDetails";
import Segment from "./reusable/Segment";

// Our Match Component
const Match = ({ player, gameID }) => {
  // set our local state using the react useState and also assign our state and setterFunction to variables
  const [match, setMatch] = useState({
    matchDetails: {},
    champion: {},
    summonerSpellNames: [],
    itemNames: [],
    perkNames: [],
    isLoaded: false
  });

  /*
     Since we have some side effects in our component (fetching data from an api), we can use
     the useEffect React function, which is equivalent to componentDidMount and componentDidUpdate life-cycle methods.
     
     The issue though is the original useEffect only does a shallow comparison of the dependency passed in.
     so we need some way to do a deep compare.
  */

  useDeepCompareEffect(() => {
    //get our complete match details, then set our state by using the setter function
    getCompleteMatch(player, gameID).then((completeMatch) => setMatch(completeMatch));
    // the [match] is equivalent to lodash's memoize functionality, it makes sure we don't keep updating the state
    // when it hasn't changed
  }, [match]);

  // if we have a loaded match, return our details on it, else return a loading notification
  return match.isLoaded ? (
    <MatchDetails
      matchDetails={match.matchDetails}
      player={player}
      champion={match.champion}
      summonerSpellNames={match.summonerSpellNames}
      itemNames={match.itemNames}
      perkNames={match.perkNames}
    />
  ) : (
    // a reusable component, uses Semantic UI segment styling
    <Segment>Loading...</Segment>
  );
};
// a function to fetch our complete match details based on the match game id it was passed.
const getCompleteMatch = async (player, gameID) => {
  try {
    // make a call to our backend to get match details
    const result = await getMatchById(gameID);
    // since the returned object from the api call is huge, and contains information we don't need
    // lets extract what we need and and return that object instead
    const matchDetails = getExtractedMatchDetails(result.data, player);

    // we now need to do some extra work to get the names associated to the ids we retrieved from the player
    const champResult = await getChampionById(matchDetails.championId);
    const champion = champResult.data;
    const summonerSpellNames = await getSummonerSpellNames(matchDetails.summonerSpells);
    const itemNames = await getItemNames(matchDetails.items);
    const perkNames = await getPerkNames(matchDetails.summonerPerks);

    // a flag to let us know if the details have been loaded or not
    const isLoaded = true;

    // return the info we want to store in our state.
    return {
      matchDetails,
      champion,
      summonerSpellNames,
      itemNames,
      perkNames,
      isLoaded
    };
  } catch (e) {
    console.log(e);
  }
};

export default Match;
