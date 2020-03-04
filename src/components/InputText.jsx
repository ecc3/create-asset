import React, { Component } from "react";

class InputText extends Component {
  handleBlur = event => {};

  render() {
    return (
      <input
        type="text"
        value={this.props.defaultValue}
        onBlur={this.handleBlur}
        required
      ></input>
    );
  }
}

export default InputText;
