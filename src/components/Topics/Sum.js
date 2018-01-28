import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      num1: 0,
      num2: 0,
      output: 0
    };
  }
  add(num1, num2) {
    this.setState({ output: Number(num1) + Number(num2) });
  }
  subtract(num1, num2) {
    this.setState({ output: num1 - num2 });
  }
  multiply(num1, num2) {
    this.setState({ output: num1 * num2 });
  }
  divide(num1, num2) {
    this.setState({ output: num1 / num2 });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Math</h4>
        <input
          className="inputLine pS"
          type="text"
          onChange={e => this.setState({ num1: e.target.value })}
        />
        <p>and</p>
        <input
          className="inputLine pS"
          type="text"
          onChange={e => this.setState({ num2: e.target.value })}
        />

        <button
          className="confirmationButton"
          onClick={e => this.add(this.state.num1, this.state.num2)}
        >
          Add
        </button>

        <button
          className="confirmationButton"
          onClick={e => this.subtract(this.state.num1, this.state.num2)}
        >
          Subtract
        </button>
        <button
          className="confirmationButton"
          onClick={e => this.multiply(this.state.num1, this.state.num2)}
        >
          Multiply
        </button>
        <button
          className="confirmationButton"
          onClick={e => this.divide(this.state.num1, this.state.num2)}
        >
          Divide
        </button>
        <span className="resultsBox pS">{Number(this.state.output)}</span>
      </div>
    );
  }
}
