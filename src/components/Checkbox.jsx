import React from "react";

const Checkbox = props => {
  const handleBlur = event => {
    props.saveUserInput(props.name, event.target.checked);
  };
  return (
    <div className="field">
      <label>
        <input type="checkbox" id={props.checkName} onBlur={handleBlur} />
        {` ${props.checkName}`}
      </label>
    </div>
  );
};

export default Checkbox;
