import React, { Component } from "react";

import Task from "./Task";

class TasksContainer extends Component {
  state = {};

  render() {
    return (
      <div className="tasks-container">
        {[1, 2, 3].map(key => (
          <Task key={key} />
        ))}
      </div>
    );
  }
}

export default TasksContainer;
