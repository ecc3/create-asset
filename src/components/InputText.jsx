import React from "react";

const InputText = props => {
  const handleBlur = event => {
    props.saveUserInput(props.name, event.target.value);
  };
  return (
    <input
      type="text"
      defaultValue={props.defaultValue}
      onBlur={handleBlur}
      required
    ></input>
  );
};

export default InputText;
