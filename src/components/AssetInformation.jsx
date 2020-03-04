import React from "react";
import InputText from "./InputText";
import AddFile from "./AddFile";
import Checkbox from "./Checkbox";
import DropDown from "./DropDown";

const AssetInformation = () => {
  return (
    <form>
      <InputText defaultValue="Asset name" />
      <InputText defaultValue="Asset code" />
      <InputText defaultValue="Max issuance amount" />
      <DropDown options={["Type 1", "Type 2", "Type 3"]} />
      <Checkbox checkName="Transferable" />
      <Checkbox checkName="Withdrawable" />
      <AddFile label="Asset icon" />
    </form>
  );
};

export default AssetInformation;
