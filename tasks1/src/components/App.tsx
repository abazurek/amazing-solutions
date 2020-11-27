import React from "react";
import "../App.css";
import {searchSpaces as search} from "../service/search";
import {searchSpaces as searchAddress} from "../service/searchAddress"


import SearchComponent from "./SearchComponent";

function App() {

  return (
    <div className="App">
      <SearchComponent searchSpaces={search}  property="spaces"/>
      <SearchComponent searchSpaces={searchAddress} property="addresses"/>

    </div>
  );
}

export default App;
