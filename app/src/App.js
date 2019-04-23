import React, { Component } from "react";
import { Typography } from "@rmwc/typography";
import { Button } from "@rmwc/button";

import TasksContainer from "./TasksContainer";

import "./App.css";
import "@material/typography/dist/mdc.typography.css";
import "@material/button/dist/mdc.button.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Typography use="headline2">To Do</Typography>
        <Button label="Add Task" icon="add" unelevated />
        <TasksContainer />
      </div>
    );
  }
}

export default App;
