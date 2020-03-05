import React from "react";
import Input from "muicss/lib/react/input";

const InputText = props => {
  const handleBlur = event => {
    props.saveUserInput(props.name, event.target.value);
  };
  return (
    <div>
      <Input
        type="text"
        defaultValue={props.defaultValue}
        onBlur={handleBlur}
        required
      ></Input>
    </div>
  );
};

export default InputText;
