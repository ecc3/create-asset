import React from "react";

const Link = props => {
  return (
    <div>
      <a href={props.url}>{props.text}</a>
      <i class="fas fa-external-link-alt"></i>
    </div>
  );
};

export default Link;
