import React, { Component } from "react";
import { List, ListItem, ListItemMeta } from "@rmwc/list";

import "@material/list/dist/mdc.list.css";

class ListContainer extends Component {
  state = {
    Cookies: false,
    Pizza: false,
    Icecream: false
  };

  render() {
    return (
      <List>
        {["Cookies", "Pizza", "Icecream"].map(key => (
          <ListItem
            key={key}
            onClick={() => setChecked({ ...checked, [key]: !checked[key] })}
          >
            {key}
            <ListItemMeta>
              <Checkbox checked={checked[key]} readOnly />
            </ListItemMeta>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ListContainer;
