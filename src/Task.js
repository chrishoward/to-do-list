import React, { Component } from "react";
import { Checkbox } from "@rmwc/checkbox";
import { TextField } from "@rmwc/textfield";
import { Fab } from "@rmwc/fab";

import "@material/checkbox/dist/mdc.checkbox.css";
import "@material/form-field/dist/mdc.form-field.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/fab/dist/mdc.fab.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

class Tasks extends Component {
  state = {
    isBeingEdited: false,
    userEditedInput: "foo"
  };

  editTask = event => {
    this.setState({
      userEditedInput: event.target.value
    });
  };

  toggleEdit = () => {
    this.setState({
      isBeingEdited: !this.state.isBeingEdited
    });
  };

  render() {
    const { isBeingEdited, userEditedInput } = this.state;
    return (
      <div
        className="task"
        // key={key}
      >
        <Checkbox checked={true} readOnly />
        {isBeingEdited ? (
          <React.Fragment>
            <TextField
              className="task__text"
              value={userEditedInput}
              onChange={this.editTask}
            />
            <Fab
              className="task__button"
              icon="save"
              onClick={this.toggleEdit}
              mini
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="task__text">Test</div>
            <Fab
              className="task__button"
              icon="edit"
              onClick={this.toggleEdit}
              mini
            />
          </React.Fragment>
        )}
        <Fab className="task__button" icon="delete" mini />
      </div>
    );
  }
}

export default Tasks;
