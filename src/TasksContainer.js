import React, { Component } from "react";
import { connect } from "react-redux";

import Task from "./Task";

class TasksContainer extends Component {
  render() {
    const { tasks } = this.props;
    console.log("tasks: ", tasks);
    return (
      <div className="tasks-container">
        {tasks.map(task => {
          const { id, description, completed } = task;
          return (
            <Task
              key={id}
              id={id}
              description={description}
              completed={completed}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks
});

export default connect(mapStateToProps)(TasksContainer);
