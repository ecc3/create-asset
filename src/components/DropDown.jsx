import React from "react";

const DropDown = props => {
  const handleBlur = event => {
    props.saveUserInput(props.name, event.target.value);
  };
  return (
    <select onBlur={handleBlur}>
      <option selected disabled hidden>
        {props.defaultValue}
      </option>
      {props.options.map(passedOption => {
        return (
          <option value={passedOption} key={passedOption}>
            {passedOption}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
