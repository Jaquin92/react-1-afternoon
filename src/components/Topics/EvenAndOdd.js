import React, { Component } from "react";

export default class EvenAndOdds extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  assignEvenAndOdds(userInput) {
    let odds = [];
    let evens = [];
    let arr = userInput.split(",");
    arr.forEach(i => {
      if (i % 2 === 0) {
        evens.push(Number(i));
      } else {
        odds.push(Number(i));
      }
    });
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          onChange={e => this.handleChange(e.target.value)}
          className="inputLine"
          type="text"
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
