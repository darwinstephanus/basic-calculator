import React from "react";

export default class Display extends React.Component {
	render() {
		return (
			<input className="calc-display" type="text" disabled={true} value={"Calculator's Display"} />
		);
	}
}
