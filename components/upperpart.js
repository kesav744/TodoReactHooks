import React, { useState } from 'react';
import classes from './upper.module.css';

const Upper = (props) => {
    const [enteredValue,setEnteredValue] = useState('');

    const onChangeHandler = (event) => {
        // dispatch({
        //     "type":"textChage",
        //     "value":event.target.value
        // })
        setEnteredValue(event.target.value)
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            return;
        }
        props.addText(enteredValue);
        console.log(enteredValue);
        setEnteredValue('');
    };

    return <form className={classes.form} onSubmit={onSubmitHandler}>
    <input type='text' value={enteredValue} onChange={onChangeHandler}/>
    <button>Add input</button>
</form>
};

export default Upper;