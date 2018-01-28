import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      output: "Let's See!"
    };
  }
  handleChange(val) {
    this.setState({ input: val });
  }
  Palindrome(str) {
    if (str === "") {
      this.setState({ output: "Please enter a word!" });
      return;
    }
    let arr = str.split("");
    arr.reverse();
    arr = arr.join("");
    this.setState({ output: arr === str });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          type="text"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={e => this.Palindrome(this.state.input)}
        >
          Is a Palindrome?
        </button>
        <span className="resultsBox pS ">
          {" "}
          {JSON.stringify(this.state.output)}{" "}
        </span>
      </div>
    );
  }
}
