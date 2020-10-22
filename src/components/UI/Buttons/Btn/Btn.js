import React from 'react';
import classes from './Btn.module.css';

const Btn = props => {
    let styleButton = [classes.Btn]
    if(props.selected) {
        styleButton.push(classes.selected);
    }

    return (
        <button 
            className={styleButton.join(' ')} 
            onClick={props.clicked}> 
            {props.children} 
        </button>
    )
}

export default Btn;