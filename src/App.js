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
    data: {
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
    },
    tabIdx: 0
  };

  saveUserInput = (field, data) => {
    this.setState({ [field]: data });
  };

  onChange = (i, value, tab, ev) => {
    this.setState(
      {
        tabIdx: i
      },
      () => {
        navigate(value);
      }
    );
  };

  navigateToNextTab = () => {
    this.setState({ tabIdx: 1 }, () => {
      navigate("advanced");
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Tabs onChange={this.onChange} selectedIndex={this.state.tabIdx}>
            <Tab value="/" label="1. Asset Information"></Tab>
            <Tab value="advanced" label="2. Advanced"></Tab>
          </Tabs>
          <Router>
            <AssetInformation
              path="/"
              saveUserInput={this.saveUserInput}
              navigateToNextTab={this.navigateToNextTab}
            />
            <Advanced
              path="advanced"
              saveUserInput={this.saveUserInput}
              inputtedData={this.state.data}
            />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
