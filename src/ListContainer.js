import React, { Component } from "react";
import { List, ListItem, ListItemMeta } from "@rmwc/list";
import { Checkbox } from "@rmwc/checkbox";
import { Fab } from "@rmwc/fab";

import "@material/list/dist/mdc.list.css";
import "@material/checkbox/dist/mdc.checkbox.css";
import "@material/form-field/dist/mdc.form-field.css";
import "@material/fab/dist/mdc.fab.css";

class ListContainer extends Component {
  state = {
    Cookies: false,
    Pizza: false,
    Icecream: false
  };

  render() {
    return (
      <List className="list">
        {["Cookies", "Pizza", "Icecream"].map(key => (
          <ListItem
            key={key}
            // onClick={() => setChecked({ ...checked, [key]: !checked[key] })}
          >
            {/* <ListItemMeta> */}
            {/* <Checkbox checked={checked[key]} readOnly /> */}
            <Checkbox checked={true} readOnly />
            {/* </ListItemMeta> */}
            <div className="list-item__text">{key}</div>
            <Fab className="list-item__button" icon="save" mini />
            <Fab className="list-item__button" icon="edit" mini />
            <Fab className="list-item__button" icon="delete" mini />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ListContainer;
