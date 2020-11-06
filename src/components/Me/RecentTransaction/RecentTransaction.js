import React from 'react';
import classes from './RecentTransaction.module.css';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const RecentTransaction = ({ last_transactions }) => {

    let display_last_transactions = (
        <p>Loading</p>
    )

    if(last_transactions){
        if(last_transactions.length > 0){

            display_last_transactions = last_transactions.map(item => (
                <TransactionItem 
                    key={item.id}
                    bank_name={item.get_card.bank_name}
                    card_number={item.get_card.number}
                    amount={item.amount}
                    type={item.type}
                    date={item.get_card.created_at}
                /> 
            ))
        }

        display_last_transactions = <p>Transactions Empty</p>
    }

    return (
        <div className={classes.CardTransactionContent}>
            <div className={classes.CardTransactionHeading}>
                <h6>Recent Transactions</h6>
            </div>

            <ul className={classes.CardTransactionList}>

                {display_last_transactions}
                              
            </ul>
        </div>
    )
}
