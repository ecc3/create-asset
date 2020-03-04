import React from "react";

const AddFile = props => {
  return (
    <label>
      {props.label}
      <input type="file" />
    </label>
  );
};

export default AddFile;
