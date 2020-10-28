import React from "react";
import * as Mui from "@material-ui/core";

export default class Button extends React.Component {
  forceSpace() {
    return;
  }

  render() {
    return (
      <Mui.Button
        variant="contained"
        className="calc-button"
        disabled={this.props.disabled}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.disabled ? "\u00a0" : this.props.children}
      </Mui.Button>
    );
  }
}
