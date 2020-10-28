import React from "react";

import Row from "./components/Row";
import Display from "./components/Display";
import Button from "./components/Button";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "0",
      specialEqualNumber: "",
      operator: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addZeroToInput = (val) => {
    //if this.state.input not empty then you can add zero
    if (this.state.input !== "") {
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
      specialEqualNumber: "0",
      operator: "",
    });
  };

  addition = () => {
    this.setState({ operator: "plus" });
    if (this.state.input !== "") {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "plus" });
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
    if (this.state.operator === "plus") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) +
          (this.state.input === ""
            ? parseFloat(this.state.specialEqualNumber)
            : parseFloat(this.state.input)),
      });
      this.setState({
        specialEqualNumber:
          this.state.input === ""
            ? this.state.specialEqualNumber
            : this.state.input,
      });
    } else if (this.state.operator === "substract") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) -
          (this.state.input === ""
            ? parseFloat(this.state.specialEqualNumber)
            : parseFloat(this.state.input)),
      });
      this.setState({
        specialEqualNumber:
          this.state.input === ""
            ? this.state.specialEqualNumber
            : this.state.input,
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) *
          (this.state.input === ""
            ? parseFloat(this.state.specialEqualNumber)
            : parseFloat(this.state.input)),
      });
      this.setState({
        specialEqualNumber:
          this.state.input === ""
            ? this.state.specialEqualNumber
            : this.state.input,
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) /
          (this.state.input === ""
            ? parseFloat(this.state.specialEqualNumber)
            : parseFloat(this.state.input)),
      });
      this.setState({
        specialEqualNumber:
          this.state.input === ""
            ? this.state.specialEqualNumber
            : this.state.input,
      });
    }
    this.setState({ input: "" });
  };

  substract = () => {
    this.setState({ operator: "substract" });
    if (this.state.input !== "") {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "substract" });
      this.evaluate();
    }
    console.log(this.state);
  };

  multiply = () => {
    this.setState({ operator: "multiply" });
    if (this.state.input !== "") {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "multiply" });
      this.evaluate();
    }
    console.log(this.state);
  };

  divide = () => {
    this.setState({ operator: "divide" });
    if (this.state.input !== "") {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "divide" });
      this.evaluate();
    }
    console.log(this.state);
  };

  plusMinus = () => {
    //we want to plusMinus the value shown in the screen right now
    //{this.state.input === ""
    //? this.state.previousNumber
    //: this.state.input}
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
    return (
      <div className="calc">
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
          <Button handleClick={this.addition}>+</Button>
        </Row>
        <Row>
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.substract}>-</Button>
        </Row>
        <Row>
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>×</Button>
        </Row>
        <Row>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.divide}>÷</Button>
        </Row>
        <Row>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.plusMinus}>+/-</Button>
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.equalSign}>=</Button>
        </Row>
      </div>
    );
  }
}
