import React, { Component } from "react";
//import Calendar from "./Calendar"

import "../scss/_addTodo.scss";

class AddTodo extends Component {
  state = {
    title: "",
    date: "",
  };

  handleDate = (evt) => {
    this.setState({ title: this.state.title, date: evt.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.date === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addTodo(this.state.title, this.state.date);
    this.setState({ title: "", date: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="formstyle">
          <input
            type="text"
            name="title"
            placeholder="Add Todo"
            className="placeholder-style"
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="date"
            name="date"
            value={this.state.date}
            onChange={this.handleDate}
          />

          <input type="submit" value="Add" className="btn" />
        </form>

        <div class="horizontal-line"></div>
      </div>
    );
  }
}

export default AddTodo;
