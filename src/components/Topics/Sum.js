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
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Add or Subtract</h4>
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
        <p>or</p>
        <button
          className="confirmationButton"
          onClick={e => this.subtract(this.state.num1, this.state.num2)}
        >
          Subtract
        </button>
        <span className="resultsBox pS">{Number(this.state.output)}</span>
      </div>
    );
  }
}
