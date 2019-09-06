import React from "react";
import ListItem from "./ListItem.jsx";

function Accessibility(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

export default Accessibility;
