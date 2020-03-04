import "./App.css";
import { Router } from "@reach/router";
import React, { Component } from "react";
import AssetInformation from "./components/AssetInformation";
import Advanced from "./components/Advanced";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <AssetInformation path="/" />
          <Advanced path="advanced" />
        </Router>
      </div>
    );
  }
}

export default App;
