import React from 'react';
import classes from './Transaction.module.css';

export const TransactionItem = ({ bank_name, card_number, amount, type, date }) => {

    let icon;
    type === 'inc' ? icon = 'IconInc' : icon = 'IconExp';

    return (
        <li className={classes.CardTransactionItem}>
            <div className={icon}></div>
            <div className={classes.TransactionItem}>
                <h6>{bank_name} / {card_number}</h6>
                <p>RP. {amount}</p>
                <p>{date}</p>
            </div>
        </li>
    )
}
