import React, { Component } from "react";
import { Typography } from "@rmwc/typography";
import { Button } from "@rmwc/button";
import { connect } from "react-redux";

import TasksContainer from "./TasksContainer";
import { getTasks, addTask, updateTask, deleteTask } from "./redux/actions";

import "./App.css";
import "@material/typography/dist/mdc.typography.css";
import "@material/button/dist/mdc.button.css";

class App extends Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  render() {
    const { addTask } = this.props;
    return (
      <div className="app">
        <Typography use="headline2">To Do</Typography>
        <Button label="Add Task" icon="add" onClick={addTask} unelevated />
        <TasksContainer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getTasks,
  addTask
};

export default connect(
  null,
  mapDispatchToProps
)(App);
