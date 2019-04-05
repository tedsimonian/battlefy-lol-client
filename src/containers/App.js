import React from "react";
import { getSummoner, getMatches } from "../api";
import PlayerSearch from "../components/PlayerSearch";
import MatchList from "../components/MatchList";
import ErrorBoundary from "../hoc/ErrorBoundary";

const dashStyle = {
  width: "50%",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: "1%"
};
/* 
  Our Main App (Root App). This app will wrap all of our child components.
  Since this is a smaller app, we don't need to really introduce Redux, we can just
  rely on passing props since we don't have deeply nested children.
*/
class App extends React.Component {
  // our local state
  state = {
    player: {},
    matches: []
  };

  getMatchesForPlayer = async (accountID) => {
    const result = await getMatches(accountID);
    const matches = result.data.matches;
    this.setState({ matches });
  };

  // handle our search of a summoner (player)
  handleSearch = async (name) => {
    try {
      // initially reset state
      this.setState({ player: {}, matches: [] });
      // start our call to the backend server to fetch summoner details
      const result = await getSummoner(name);
      const player = result.data;
      //set our summoner (player) state
      this.setState({ player }, () => this.getMatchesForPlayer(player.accountId));
    } catch (e) {
      console.log("ERROR: ", e);
    }
  };

  render() {
    // deconstruct our state object to make accessing the data cleaner looking
    const { player, matches } = this.state;
    return (
      <div style={dashStyle}>
        <h1 className="ui center aligned header">League of Legends Stats</h1>
        {/* try to catch any errors using the React ErrorBoundary */}
        <ErrorBoundary>
          <PlayerSearch handleSearch={this.handleSearch} />
          <MatchList player={player} matches={matches} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
