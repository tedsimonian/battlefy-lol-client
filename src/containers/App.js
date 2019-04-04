import React from "react";
import { getSummoner } from "../api";
import PlayerSearch from "../components/PlayerSearch";

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
    player: {}
  };

  // handle our search of a summoner (player)
  handleSearch = async (name) => {
    try {
      // initially reset state
      this.setState({ player: {} });
      // start our call to the backend server to fetch summoner details
      const result = await getSummoner(name);
      const player = result.data;
      //set our summoner (player) state
      this.setState({ player });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  render() {
    return (
      <div style={dashStyle}>
        <h1 className="ui center aligned header">League of Legends Stats</h1>
        <PlayerSearch handleSearch={this.handleSearch} />
        <div>I'm a Match List</div>
      </div>
    );
  }
}

export default App;
