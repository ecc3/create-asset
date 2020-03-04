import React from "react";

const Checkbox = props => {
  return (
    <div>
      <label>
        <input type="checkbox" id={props.checkName} />
        {props.checkName}
      </label>
    </div>
  );
};

export default Checkbox;
