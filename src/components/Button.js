import React from "react";
import * as Mui from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const orangeTheme = createMuiTheme({ palette: { secondary: orange } });

export default class Button extends React.Component {
  forceSpace() {
    return;
  }

  render() {
    return (
      <MuiThemeProvider theme={orangeTheme}>
        <Mui.Button
          className="calc-button"
          variant="contained"
          color={this.props.color}
          disabled={this.props.disabled}
          onClick={() => this.props.handleClick(this.props.children)}
        >
          {this.props.disabled ? "\u00a0" : this.props.children}
        </Mui.Button>
      </MuiThemeProvider>
    );
  }
}
