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
    id: this.props.id,
    description: this.props.description,
    completed: this.props.completed,
    isBeingEdited: false,
    userEditedDescription: this.props.description
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevState) {
    if (
      this.state.description !== prevState.description ||
      this.state.completed !== prevState.completed
    ) {
      const { updateTask } = this.props;
      const { isBeingEdited, userEditedDescription, ...task } = this.state;
      updateTask(task);
    }
  }

  editTask = name => event => {
    this.setState({
      [name]: name === "completed" ? event.target.checked : event.target.value
    });
  };

  toggleEdit = () => {
    this.setState({
      isBeingEdited: !this.state.isBeingEdited
    });
  };

  saveEditedTask = () => {
    this.toggleEdit();
    this.setState({ description: this.state.userEditedDescription });
  };

  render() {
    const { deleteTask } = this.props;
    const {
      id,
      description,
      completed,
      isBeingEdited,
      userEditedDescription
    } = this.state;
    return (
      <div className="task">
        <Checkbox
          checked={completed}
          onClick={this.editTask("completed")}
          readOnly
        />
        {isBeingEdited ? (
          <React.Fragment>
            <TextField
              className="task__text"
              value={userEditedDescription}
              onChange={this.editTask("userEditedDescription")}
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
            <div
              className={`task__text ${
                completed ? "task__text--completed" : ""
              }`}
            >
              {description}
            </div>
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
