import React, { Component } from "react";
import "../scss/_todo.scss";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        delTodo={this.props.delTodo}
        checkboxClickHandler={this.props.checkboxClickHandler}
      />
    ));
  }
}

export default Todos;
