import React, { Component } from "react";
import { connect } from "react-redux";

import Task from "./Task";

class TasksContainer extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="tasks-container">
        {tasks.map(task => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ tasks }) => ({
  tasks
});

export default connect(mapStateToProps)(TasksContainer);
