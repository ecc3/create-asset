import React from "react";

const InputText = props => {
  const handleBlur = event => {
    props.saveUserInput(props.name, event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        defaultValue={props.defaultValue}
        onBlur={handleBlur}
        required
      ></input>
    </div>
  );
};

export default InputText;
