import React from "react";

const DropDown = props => {
  return (
    <select>
      {props.options.map(passedOption => {
        return <option value={passedOption}>{passedOption}</option>;
      })}
    </select>
  );
};

export default DropDown;
