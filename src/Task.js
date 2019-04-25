import React, { Component } from "react";
import { Checkbox } from "@rmwc/checkbox";
import { TextField } from "@rmwc/textfield";
import { Fab } from "@rmwc/fab";
import { connect } from "react-redux";

import { updateTask, deleteTask } from "./redux/actions";

import "@material/checkbox/dist/mdc.checkbox.css";
import "@material/form-field/dist/mdc.form-field.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/fab/dist/mdc.fab.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

class Task extends Component {
  state = {
    isBeingEdited: false,
    task: this.props.task
  };

  editTask = name => event => {
    console.log("name: ", name);
    console.log("etv: ", event.target.checked);
    this.setState({
      task: {
        ...this.state.task,
        [name]: name === "completed" ? event.target.checked : event.target.value
      }
    });
  };

  toggleEdit = () => {
    this.setState({
      isBeingEdited: !this.state.isBeingEdited
    });
  };

  toggleCompletion = () => {
    const { updateTask } = this.props;
    const { task } = this.state;
    updateTask(task);
  };

  saveEditedTask = () => {
    const { updateTask } = this.props;
    const { task } = this.state;
    this.toggleEdit();
    updateTask(task);
  };

  render() {
    const { isBeingEdited, task } = this.state;
    const { deleteTask } = this.props;
    const { id, description, completed } = task;
    return (
      <div
        className="task"
        // key={key}
      >
        <Checkbox
          checked={completed}
          onClick={this.editTask("completed")}
          readOnly
        />
        {isBeingEdited ? (
          <React.Fragment>
            <TextField
              className="task__text"
              value={description}
              onChange={this.editTask("description")}
            />
            <Fab
              className="task__button"
              icon="save"
              onClick={this.saveEditedTask}
              mini
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="task__text">{description}</div>
            <Fab
              className="task__button"
              icon="edit"
              onClick={this.toggleEdit}
              mini
            />
          </React.Fragment>
        )}
        <Fab
          className="task__button"
          icon="delete"
          onClick={() => deleteTask(id)}
          mini
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateTask,
  deleteTask
};

export default connect(
  null,
  mapDispatchToProps
)(Task);
