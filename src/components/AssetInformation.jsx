import React from "react";
import InputText from "./InputText";

const AssetInformation = () => {
  return (
    <div>
      <InputText defaultValue="Asset name" />
      <InputText defaultValue="Asset code" />
      <InputText defaultValue="Max issuance amount" />
    </div>
  );
};

export default AssetInformation;
