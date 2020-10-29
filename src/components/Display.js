import React from "react";

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
