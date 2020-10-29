import React from "react";

import Row from "./components/Row";
import Display from "./components/Display";
import Button from "./components/Button";
import OperatorButton from "./components/OperatorButton";
import EqualButton from "./components/EqualButton";
import Container from "@material-ui/core/Container";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "0",
      operator: "",
      lastOperandNumber: "",
      lastOperator: "",
    };
  }

  addToInput = (val) => {
    if (this.state.input === "0") {
      this.setState({ input: val });
    } else {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    //if this.state.input not empty then you can add zero
    if (this.state.input !== "0") {
      this.setState({ input: this.state.input + val });
    }
  };

  addDecimal = (val) => {
    //only add decimal if no decimal in this.state.input
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({
      input: "",
      previousNumber: "0",
      operator: "",
      lastOperandNumber: "0",
      lastOperator: "",
    });
  };

  addition = () => {
    this.setState({ operator: "plus" });
    if (this.state.input !== "") {
      //this previousNumber is important for the very first number
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ lastOperator: "plus" });
      /*
      when we evaluate the first number, state of operator is still "" even though we just set it because we are preparing
      it for the next input
      */
      this.evaluate();
    }
  };

  evaluate = () => {
    if (this.state.operator === "plus") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) + parseFloat(this.state.input),
      });
    } else if (this.state.operator === "substract") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) - parseFloat(this.state.input),
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) * parseFloat(this.state.input),
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) / parseFloat(this.state.input),
      });
    }
  };

  equalSign = () => {
    if (this.state.input !== "") {
      this.setState({
        lastOperandNumber:
          this.state.input === ""
            ? this.state.lastOperandNumber
            : this.state.input,
      });
      this.setState({ lastOperator: this.state.operator });
      this.evaluate();
    } else {
      if (this.state.lastOperator === "plus") {
        this.setState({
          previousNumber:
            parseFloat(this.state.previousNumber) +
            parseFloat(this.state.lastOperandNumber),
        });
      } else if (this.state.lastOperator === "substract") {
        this.setState({
          previousNumber:
            parseFloat(this.state.previousNumber) -
            parseFloat(this.state.lastOperandNumber),
        });
      } else if (this.state.lastOperator === "multiply") {
        this.setState({
          previousNumber:
            parseFloat(this.state.previousNumber) *
            parseFloat(this.state.lastOperandNumber),
        });
      } else if (this.state.lastOperator === "divide") {
        this.setState({
          previousNumber:
            parseFloat(this.state.previousNumber) /
            parseFloat(this.state.lastOperandNumber),
        });
      }
    }

    this.setState({ operator: "" });
    this.setState({ input: "" });
  };

  substract = () => {
    this.setState({ operator: "substract" });
    if (this.state.input !== "") {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ lastOperator: "substract" });
      this.evaluate();
    }
    console.log(this.state);
  };

  multiply = () => {
    this.setState({ operator: "multiply" });
    if (this.state.input !== "") {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ lastOperator: "multiply" });
      this.evaluate();
    }
    console.log(this.state);
  };

  divide = () => {
    this.setState({ operator: "divide" });
    if (this.state.input !== "") {
      // this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ lastOperator: "divide" });
      this.evaluate();
    }
    console.log(this.state);
  };

  plusMinus = () => {
    if (this.state.input === "") {
      this.setState({
        previousNumber:
          parseFloat(
            this.state.input === ""
              ? this.state.previousNumber
              : this.state.input
          ) * -1,
      });
    } else {
      this.setState({
        input: parseFloat(this.state.input) * -1,
      });
    }
  };

  removeLastCharacter = () => {
    this.setState({ input: this.state.input.slice(0, -1) });
  };

  render() {
    // const screen = inputs.map((input) => input.val).join("");

    return (
      <div className="calc">
        {/* <Row>
          <Display>ABCBASDBJKASDLKASJDl</Display>
        </Row> */}
        <Container className="calc-container" maxWidth="sm">
          <Row>
            <Display>
              {this.state.input === ""
                ? this.state.previousNumber
                : this.state.input}
            </Display>
          </Row>
          <Row>
            <Button handleClick={this.clearInput}>Clear</Button>
            <Button handleClick={this.removeLastCharacter}>←</Button>
            <Button disabled={true} />
            <OperatorButton handleClick={this.addition}>+</OperatorButton>
          </Row>
          <Row>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <OperatorButton handleClick={this.substract}>-</OperatorButton>
          </Row>
          <Row>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <OperatorButton handleClick={this.multiply}>×</OperatorButton>
          </Row>
          <Row>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <OperatorButton handleClick={this.divide}>÷</OperatorButton>
          </Row>
          <Row>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.plusMinus}>+/-</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <EqualButton className="calc-equal" handleClick={this.equalSign}>
              =
            </EqualButton>
          </Row>
        </Container>
      </div>
    );
  }
}
