import React from "react";

const SubmitButton = props => {
  return (
    <div>
      <input type="submit" value={props.text} />
    </div>
  );
};

export default SubmitButton;
