import React, { Component } from "react";
//import logo from "./logo.svg";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Sort from "./components/Sort";
import SortTwo from "./components/SortTwo";
import { v4 as uuidv4 } from "uuid";

//import { render } from "@testing-library/react";
import "./App.scss";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Buy groceries for next week",
        completed: false,
        startDate: "2021-12-8",
      },

      {
        id: uuidv4(),
        title: "Renew car insurance",
        completed: false,
        startDate: "2021-12-9",
      },

      {
        id: uuidv4(),
        title: "Sign up for online course",
        completed: true,
        startDate: "2021-12-10",
      },
    ],

    filteredTodos: [
      {
        id: uuidv4(),
        title: "Buy groceries for next week",
        completed: false,
        startDate: "2021-12-8",
      },

      {
        id: uuidv4(),
        title: "Renew car insurance",
        completed: false,
        startDate: "2021-12-9",
      },

      {
        id: uuidv4(),
        title: "Sign up for online course",
        completed: true,
        startDate: "2021-12-10",
      },
    ],
  };

  //tick
  checkboxClickHandler = (event) => {
    const id = event.target.name;

    const data = this.state.todos.find((todo) => todo.id === id);
    data.completed = event.target.checked;
    this.setState({ ...this.state.todos, data });
  };

  //sort
  sortChangeHandler = (event) => {
    const sortBy = event.target.value;
    const compareDateAsc = (todosa, todosb) => {
      const date1 = new Date(todosa.startDate).getTime();
      const date2 = new Date(todosb.startDate).getTime();
      if (date1 > date2) return 1;
      else if (date1 < date2) return -1;
      else return 0;
    };

    const compareDateDesc = (todosa, todosb) => {
      const date1 = new Date(todosa.startDate).getTime();
      const date2 = new Date(todosb.startDate).getTime();
      if (date1 < date2) return 1;
      else if (date1 > date2) return -1;
      else return 0;
    };
    const todosList = this.state.filteredTodos;
    todosList.sort(sortBy === "Asc" ? compareDateAsc : compareDateDesc);
    this.setState({ filteredTodos: todosList });
  };

  //filter
  filterChangeHandler = (event) => {
    const filteredTodos = this.state.todos.filter((todo) =>
      event.target.value === "Done"
        ? todo.completed
        : event.target.value === "Undone"
        ? !todo.completed
        : todo
    );
    this.setState({ filteredTodos });
  };

  //Add Todo
  addTodo = (title, startDt) => {
    const newTodo = {
      id: uuidv4(),
      title,
      startDate: startDt,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      filteredTodos: [...this.state.todos, newTodo],
    });
  };

  //delete
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      filteredTodos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <div className="filter-main">
          <Sort filterChangeHandler={this.filterChangeHandler} />
          <SortTwo sortChangeHandler={this.sortChangeHandler} />
        </div>
        <div className="container">
          <Todos
            todos={this.state.filteredTodos}
            delTodo={this.delTodo}
            checkboxClickHandler={this.checkboxClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
