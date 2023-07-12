import React from "react";
import ListItems from "./listItems";
import classes from "./lower.module.css";

const Lower = (props) => {
  return (
    <ul className={classes.ul}>
      {props.items.map((list) => (
        <ListItems key={list.id} id={list.id} onDelete={props.onDeleteTerm}>
          {list.text}
        </ListItems>
      ))}
    </ul>
  );
};

export default Lower;
