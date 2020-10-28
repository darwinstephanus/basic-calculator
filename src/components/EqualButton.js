import React from "react";
import * as Mui from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

export class EqualButton extends React.Component {
  forceSpace() {
    return;
  }
  render() {
    return (
      <Mui.Button
        variant="contained"
        className="calc-equal"
        color="secondary"
        disabled={this.props.disabled}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.disabled ? "\u00a0" : this.props.children}
      </Mui.Button>
    );
  }
}

export default withStyles(styles)(EqualButton);