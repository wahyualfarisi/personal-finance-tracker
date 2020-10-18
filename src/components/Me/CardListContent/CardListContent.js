import React from 'react';
import classes from './CardListContent.module.css';
import { CardListItem } from './CardListItem/CardListItem';
import { Heading } from './Heading/Heading';

export const CardListContent = () => {
    return (
        <div className={classes.CardListContent}>
            <h1>Card List</h1>
            <Heading />

            <div className={classes.CardListData}>
                <CardListItem />
            </div>
        </div>
    )
}
