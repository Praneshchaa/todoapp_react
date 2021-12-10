import React, { Component } from "react";
import "../scss/_sort.scss";

class Sort extends Component {
  render() {
    return (
      <div className="dropdown">
        <p className="filter-text"> Sort </p>

        <select onChange={this.props.sortChangeHandler}>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
      </div>
    );
  }
}

export default Sort;
