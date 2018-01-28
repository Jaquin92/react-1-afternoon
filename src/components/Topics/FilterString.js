import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      array: [
        "Fords suck",
        "Chevys are great cars",
        "Honda makes poor cars",
        "Toyota is the car your grandmother drives",
        "BMW makes sick motorcycles",
        "Tesla is going bankrupt"
      ],
      input: "",
      filteredArray: []
    };
  }
  handleChange(val) {
    this.setState({ input: val });
  }
  filter(prop) {
    let arr = this.state.array;
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].includes(prop)) {
        newarr.push(arr[i]);
      }
    }
    this.setState({ filteredArray: newarr });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter String</h4>
        <span>Original: {JSON.stringify(this.state.array, null, 10)}</span>
        <input
          className="inputLine"
          type="text"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={e => this.filter(this.state.input)}
        >
          Filter String
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
