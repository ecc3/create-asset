import "./App.css";
import { Router, Link } from "@reach/router";
import React, { Component } from "react";
import AssetInformation from "./components/AssetInformation";
import Advanced from "./components/Advanced";
import Header from "./components/Header";

class App extends Component {
  state = {
    assetName: "",
    assetCode: "",
    maxIssuanceAmount: "",
    type: "",
    transferable: false,
    withdrawable: false,
    assetIcon: "",
    makeAdditionalIssuance: false,
    assetSignerID: "",
    initialAmount: "",
    uploadTerms: ""
  };

  saveUserInput = (field, data) => {
    this.setState({ [field]: data }, () => {
      console.log(this.state, "state");
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <nav>
          <Link to="/">1. Asset Information</Link>
          <Link to="advanced">2. Advanced</Link>
        </nav>
        <Router>
          <AssetInformation path="/" saveUserInput={this.saveUserInput} />
          <Advanced
            path="advanced"
            saveUserInput={this.saveUserInput}
            inputtedData={this.state}
          />
        </Router>
      </div>
    );
  }
}

export default App;
