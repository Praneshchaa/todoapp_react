import React, { Component } from "react";
import "../scss/_todoitem.scss";

export default class TodoItem extends Component {
  render() {
    let { id, title, startDate, completed } = this.props.todo;

    return (
      <div className="itemsedit">
        <div>
          <input
            name={id}
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.checkboxClickHandler}
          />
          {title}
        </div>
        <div>
          <span className="itemdate">{startDate}</span>
          <button
            onClick={this.props.delTodo.bind(this, id)}
            className="btnStyle"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}
