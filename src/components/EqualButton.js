import React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
// import { withStyles } from "@material-ui/core/styles";

const orangeTheme = createMuiTheme({ palette: { secondary: orange } });

// const styles = {
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     borderRadius: 3,
//     border: 0,
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   },
// };

export default class EqualButton extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={orangeTheme}>
        <Button
          variant="contained"
          className="calc-equal"
          color="secondary"
          disabled={this.props.disabled}
          onClick={() => this.props.handleClick(this.props.children)}
        >
          {this.props.disabled ? "\u00a0" : this.props.children}
        </Button>
      </MuiThemeProvider>
    );
  }
}

// export default withStyles(styles)(EqualButton);
