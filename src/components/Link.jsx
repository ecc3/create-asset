import React from "react";

const Link = props => {
  return (
    <div>
      <a href={props.url}>
        {props.text} <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
};

export default Link;
