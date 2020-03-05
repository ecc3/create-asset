import React from "react";
import Checkbox from "./Checkbox";
import InputText from "./InputText";
import AddFile from "./AddFile";
import SubmitButton from "./SubmitButton";
import Link from "./Link";

const Advanced = props => {
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Checkbox
        checkName="I do not want to make additional issuance later"
        name="makeAdditionalIssuance"
        saveUserInput={props.saveUserInput}
      />
      <Link
        url="https://www.dictionary.com/browse/pre-issuance"
        text="Learn more about pre-issuance"
      />
      <InputText
        defaultValue="Pre-issuance asset signer ID"
        name="assetSignerID"
        saveUserInput={props.saveUserInput}
      />
      <InputText
        defaultValue="Initial pre-issued amount"
        name="initialAmount"
        saveUserInput={props.saveUserInput}
      />
      <AddFile label="Upload terms" />
      <SubmitButton text="Create request" />
    </form>
  );
};

export default Advanced;
