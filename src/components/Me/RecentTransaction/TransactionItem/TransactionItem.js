import React from 'react';
import classes from './Transaction.module.css';

export const TransactionItem = ({ bank_name, card_number, amount, type, date }) => {

    let icon;
    type === 'inc' ? icon = 'IconInc' : icon = 'IconExp';

    let transform_card_number = '';

    if(card_number.length > 0){
        
       for(let i = 0; i<card_number.length; i++){

            if(i % 4 === 0 & i > 0){
                transform_card_number = transform_card_number.concat(' ')
            }
            transform_card_number = transform_card_number.concat( card_number[i] )
       }

       console.log(transform_card_number)
    }


    return (
        <li className={classes.CardTransactionItem}>
            <div className={icon}></div>
            <div className={classes.TransactionItem}>
                <h6>{bank_name} / {transform_card_number}</h6>
                <p>RP. {amount}</p>
                <p>{date}</p>
            </div>
        </li>
    )
}
