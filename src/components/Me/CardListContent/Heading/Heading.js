import React from 'react';
import classes from './Heading.module.css';
import { Link } from 'react-router-dom';

export const Heading = () => {
    return (
        <div className={classes.CardListHeading}>
            <h3>Collections</h3>
            <Link to="/add"> ADD CARD </Link>
        </div>
    )
}
