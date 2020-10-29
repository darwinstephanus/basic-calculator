import React from "react";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Input from "@material-ui/core/Input";

// const useStyles = makeStyles({
//   root: {
//     border: 0,
//     borderRadius: 15,
//     background: "linear-gradient(45deg, #333, #999)",
//     color: "white",
//   },
// });

export default class Display extends React.Component {
  render() {
    return (
      <div>
        <input
          className="calc-display"
          type="text"
          disabled={true}
          value={this.props.children}
        />
      </div>
    );
  }
}
