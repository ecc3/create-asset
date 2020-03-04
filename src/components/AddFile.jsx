import React from "react";

const AddFile = props => {
  return (
    <label>
      {props.uploadFile}
      <input type="file" />
    </label>
  );
};

export default AddFile;
