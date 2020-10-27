import React from "react";

import Row from "./components/Row";
import Display from "./components/Display";
import Button from "./components/Button";

export default class Calculator extends React.Component {
	render() {
		return (
			<div className="calc">
				<Row><Display /></Row>
				<Row><Button>Clear</Button><Button>←</Button><Button disabled={true}/><Button>+</Button></Row>
				<Row><Button>7</Button><Button>8</Button><Button>9</Button><Button>-</Button></Row>
				<Row><Button>4</Button><Button>5</Button><Button>6</Button><Button>×</Button></Row>
				<Row><Button>1</Button><Button>2</Button><Button>3</Button><Button>÷</Button></Row>
				<Row><Button>0</Button><Button>+/-</Button><Button>.</Button><Button>=</Button></Row>
			</div>
		);
	}
}
