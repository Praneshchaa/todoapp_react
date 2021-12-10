import React, { Component } from "react";
import "../scss/_sort.scss";

class Sort extends Component {
  render() {
    return (
      <div className="dropdown">
        <p className="filter-text"> Filter </p>

        <select onChange={this.props.filterChangeHandler}>
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="Undone">Undone</option>
        </select>
      </div>
    );
  }
}

export default Sort;
