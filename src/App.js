import "./App.css";
import { Router } from "@reach/router";
import React, { Component } from "react";
import AssetInformation from "./components/AssetInformation";
import Advanced from "./components/Advanced";
import Header from "./components/Header";
import Tabs from "muicss/lib/react/tabs";
import Tab from "muicss/lib/react/tab";
import { navigate } from "@reach/router";

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
    this.setState({ [field]: data });
  };

  onChange(i, value, tab, ev) {
    navigate(value);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Tabs onChange={this.onChange} defaultSelectedIndex={1}>
          <Tab value="/" label="1. Asset Information"></Tab>
          <Tab value="advanced" label="2. Advanced"></Tab>
        </Tabs>
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
