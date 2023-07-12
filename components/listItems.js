import React from 'react';
import classes from './listItem.module.css';
const ListItems = (props) => {

    const deleteHandler = () => {
       props.onDelete(props.id)
    };

  return <li className={classes.list}>
    <div>{props.children}</div><button onClick={deleteHandler}>DELETE</button>
  </li>
};

export default ListItems;
