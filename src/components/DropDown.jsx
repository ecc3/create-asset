import React from "react";

const DropDown = props => {
  const handleBlur = event => {
    console.log(event.target.checked);
    props.saveUserInput(props.name, event.target.checked);
  };
  return (
    <select>
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
