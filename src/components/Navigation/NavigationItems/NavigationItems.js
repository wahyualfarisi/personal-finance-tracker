import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
       <ul className={classes.NavigationItems}>
            <NavigationItem link="/"> Home </NavigationItem>
            <NavigationItem link="/login"> Login </NavigationItem>
       </ul>
    )
}

export default NavigationItems
