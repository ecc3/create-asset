import React from "react";

const Checkbox = props => {
  return (
    <div>
      <input type="checkbox" id={props.checkName} />
      <label for={props.checkName}>{props.checkName}</label>
    </div>
  );
};

export default Checkbox;
