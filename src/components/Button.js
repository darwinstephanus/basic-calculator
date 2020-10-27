import React from "react";

export default class Button extends React.Component {
	forceSpace() {
		return
	}

	render() {
		return (
			<button className="calc-button" disabled={this.props.disabled}>
				{this.props.disabled ? "\u00a0" : this.props.children}
			</button>
		);
	}
}
