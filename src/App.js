import "./App.css";
import { Router, Link } from "@reach/router";
import React, { Component } from "react";
import AssetInformation from "./components/AssetInformation";
import Advanced from "./components/Advanced";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <nav>
          <Link to="/">1. Asset Information</Link>
          <Link to="advanced">2. Advanced</Link>
        </nav>
        <Router>
          <AssetInformation path="/" />
          <Advanced path="advanced" />
        </Router>
      </div>
    );
  }
}

export default App;
