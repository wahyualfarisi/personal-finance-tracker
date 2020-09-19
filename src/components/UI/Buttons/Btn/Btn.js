import React from 'react';
import classes from './Btn.module.css';

const Btn = props => {
    return (
        <button className={classes.Btn} onClick={props.clicked}> {props.children} </button>
    )


}

export default Btn;