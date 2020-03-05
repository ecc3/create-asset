import React from "react";
import { navigate } from "@reach/router";
import InputText from "./InputText";
import AddFile from "./AddFile";
import Checkbox from "./Checkbox";
import DropDown from "./DropDown";
import SubmitButton from "./SubmitButton";
import Form from "muicss/lib/react/form";

const AssetInformation = props => {
  const handleSubmit = event => {
    event.preventDefault();
    props.navigateToNextTab();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputText
        defaultValue="Asset name"
        name="assetName"
        saveUserInput={props.saveUserInput}
      />
      <InputText
        defaultValue="Asset code"
        name="assetCode"
        saveUserInput={props.saveUserInput}
      />
      <InputText
        defaultValue="Max issuance amount"
        name="maxIssuanceAmount"
        saveUserInput={props.saveUserInput}
      />
      <DropDown
        options={["Type 1", "Type 2", "Type 3"]}
        name="type"
        defaultValue="Type"
        saveUserInput={props.saveUserInput}
      />
      <Checkbox
        checkName="Transferable"
        name="transferable"
        saveUserInput={props.saveUserInput}
      />
      <Checkbox
        checkName="Withdrawable"
        name="withdrawable"
        saveUserInput={props.saveUserInput}
      />
      <AddFile
        label="Asset icon"
        smallText="JPEG or PNG, no less than 120x120 px"
        saveUserInput={props.saveUserInput}
      />
      <SubmitButton text="Next" />
    </Form>
  );
};

export default AssetInformation;
