import React, { useState } from "react";

/*
    Our Search Component.
    This component is just a functional component that displays a search bar and search button
    the actual searching is handled by our App.js component
    We pass the handleSearch function to start searching for our 
    Summoner based on the name written in the search input.
*/
const Search = ({ handleSearch }) => {
  //using the new react useState function to allow state in functional components.
  const [name, setName] = useState("");
  return (
    <div className="ui fluid action input" style={{ marginBottom: "20px" }}>
      <input
        placeholder="Search Summoner"
        type="text"
        value={name}
        onKeyPress={(e) => {
          // convenience method to allow enter to be used instead of clicking on the search button
          if (e.key === "Enter") {
            handleSearch();
            setName("");
          }
        }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div
        className="ui button"
        onClick={() => {
          handleSearch(name);
          // reset search bar to blank
          setName("");
        }}>
        Search
      </div>
    </div>
  );
};

export default Search;
