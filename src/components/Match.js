import React, { useEffect, useState } from "react";
import { getExtractedMatchDetails } from "../utils";
import { getMatchById } from "../api/helper";
import MatchDetails from "./MatchDetails";

// Our Match Component
const Match = ({ player, gameID }) => {
  // set our local state using the react useState and also assign our state and setterFunction to variables
  const [match, setMatch] = useState({
    matchDetails: {},
    isLoaded: false
  });

  // since we have some side effects in our component (fetching data from an api), we can use
  // the useEffect React function, which is equivalent to componentDidMount and componentDidUpdate life-cycle methods
  useEffect(() => {
    //get our complete match details, then set our state by using the setter function
    getCompleteMatch(player, gameID).then((completeMatch) => setMatch(completeMatch));
    // the [match] is equivalent to lodash's memoize functionality, it makes sure we don't keep updating the state
    // when it hasn't changed
  }, [match]);

  // if we have a loaded match, return our details on it, else return a loading notification
  return match.isLoaded ? <MatchDetails matchDetails={match.matchDetails} player={player} /> : <div>Loading...</div>;
};
// a function to fetch our complete match details based on the match game id it was passed.
const getCompleteMatch = async (player, gameID) => {
  try {
    // make a call to our backend to get match details
    const result = await getMatchById(gameID);
    // since the returned object from the api call is huge, and contains information we don't need
    // lets extract what we need and and return that object instead
    const matchDetails = getExtractedMatchDetails(result.data, player);
    const isLoaded = true;

    // return the info we want to store in our state.
    return {
      matchDetails,
      isLoaded
    };
  } catch (err) {
    console.log(err);
  }
};

export default Match;
