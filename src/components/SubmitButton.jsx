import React from "react";
import Button from "muicss/lib/react/button";

const SubmitButton = props => {
  return (
    <div>
      <Button color="primary">{props.text}</Button>
    </div>
  );
};

export default SubmitButton;
