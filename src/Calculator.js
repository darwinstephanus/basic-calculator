import React from "react";

import Row from "./components/Row";
import Display from "./components/Display";
import Button from "./components/Button";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
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
      previousNumber: "",
      currentNumber: "",
      operator: "",
    });
  };

  addition = () => {
    this.setState({ previousNumber: this.state.input });
    // this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    // this.state.operator = "plus";
    this.setState({ operator: "plus" });
  };

  evaluate = () => {
    // console.log("current Number: ", this.state.currentNumber);
    // this.setState({ currentNumber: this.state.input });
    // console.log("current Number: ", this.state.input);
    // this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.input),
      });
    } else if (this.state.operator === "substract") {
      this.setState({
        input: parseInt(this.state.previousNumber) - parseInt(this.state.input),
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input: parseInt(this.state.previousNumber) * parseInt(this.state.input),
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input: parseInt(this.state.previousNumber) / parseInt(this.state.input),
      });
    }
  };
  //still not working for 1+5+3 or 1-5-3 (more than 2 numbers)
  substract = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "substract" });
  };

  multiply = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "multiply" });
  };

  divide = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "divide" });
  };

  render() {
    return (
      <div className="calc">
        <Row>
          <Display>{this.state.input}</Display>
        </Row>
        <Row>
          <Button handleClick={this.clearInput}>Clear</Button>
          <Button>←</Button>
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
          <Button>+/-</Button>
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.evaluate}>=</Button>
        </Row>
      </div>
    );
  }
}
