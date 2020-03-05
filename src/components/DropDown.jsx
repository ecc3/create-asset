import React from "react";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";

const DropDown = props => {
  const handleBlur = event => {
    props.saveUserInput(props.name, event.target.value);
  };
  return (
    <Select onBlur={handleBlur}>
      <Option selected disabled hidden label={props.defaultValue}></Option>
      {props.options.map(passedOption => {
        return <Option label={passedOption} key={passedOption}></Option>;
      })}
    </Select>
  );
};

export default DropDown;
