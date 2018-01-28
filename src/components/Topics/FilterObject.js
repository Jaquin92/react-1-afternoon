import React, { Component } from "react";

export default class FilterObjects extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        { dog: "spike", cat: "Sam" },
        { car: "BMW", Wheels: 4 },
        { dog: "spike", cat: "Jon" },
        { distance: "9 miles", location: "Mcdonalds" },
        { car: "BMW", Greeting: "Hello" }
      ],
      userInput: "",
      filteredArray: []
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  filter(prop) {
    let obj = this.state.unFilteredArray;
    let filtered = [];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].hasOwnProperty(prop)) {
        filtered.push(obj[i]);
      }
    }
    this.setState({ filteredArray: filtered });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filter(this.state.userInput)}
        >
          {" "}
          Filter Object{" "}
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}{" "}
        </span>
      </div>
    );
  }
}
