import React, { Component } from "react";
import { Typography } from "@rmwc/typography";

import TasksContainer from "./TasksContainer";
import "./App.css";
import "@material/typography/dist/mdc.typography.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Typography use="headline2">To Do</Typography>
        <TasksContainer />
      </div>
    );
  }
}

export default App;
