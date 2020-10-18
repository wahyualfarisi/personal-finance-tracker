import React from 'react';
import classes from './RecentTransaction.module.css';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const RecentTransaction = () => {
    return (
        <div className={classes.CardTransactionContent}>
            <div className={classes.CardTransactionHeading}>
                <h6>Recent Transactions</h6>
            </div>

            <ul className={classes.CardTransactionList}>
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
                <TransactionItem 
                    bank_name={'BCA BANK'}
                    card_number="1234432112344321"
                    amount={'120000'}
                    type={'inc'}
                    date={'1 november 2020'}
                />
            </ul>
        </div>
    )
}
