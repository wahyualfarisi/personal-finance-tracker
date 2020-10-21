import React, { useState } from 'react';
import classes from './Alert.module.css';

const Alert = ( { children, type } ) => {

    const [isShow, setIsShow] = useState(true);

    return (
        isShow && (
            <div className={[classes.Alert, classes[type]].join(' ')}>
                <div className={classes.AlertMessage}> {children} </div> 
                <span className={classes.AlertClose} onClick={() => setIsShow(false)}>x</span>
            </div>
        )
    )
}

export default Alert;