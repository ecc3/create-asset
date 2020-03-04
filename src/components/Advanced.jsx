import React from "react";
import Checkbox from "./Checkbox";
import InputText from "./InputText";
import AddFile from "./AddFile";
import Link from "./Link";

const Advanced = () => {
  return (
    <form action="">
      <Checkbox checkName="I do not want to make additional issuance later" />
      <Link
        url="https://www.dictionary.com/browse/pre-issuance"
        text="Learn more about pre-issuance"
      />
      <InputText defaultValue="Pre-issuance asset signer ID" />
      <InputText defaultValue="Initial pre-issued amount" />
      <AddFile label="Upload terms" />
    </form>
  );
};

export default Advanced;
