import React from 'react';
import classes from './CardListItem.module.css';
import CreditCard from './../../../UI/Cards/CreditCard/CreditCard';
import { Link } from 'react-router-dom';
import { Amount } from './Amount/Amount';

export const CardListItem = () => {
    return (
       
        <div className={classes.CardListItem}>
            <div>
                <CreditCard 
                    card_number="1234123498987876"
                    bank_name="BANK BCA"
                    color="white"
                    card_author="wahyu alfarisi"
                />
            </div>
            <div className={classes.CardListItem_Amount}>
                <Amount 
                    icon="IconInc"
                    titleItem="Income"
                    amountItem={'20.000.000'}
                />
                <Amount 
                    icon="IconExp"
                    titleItem="Expense"
                    amountItem={'20.000.000'}
                />
                <Amount 
                    icon="IconBalance"
                    titleItem="Total Balance"
                    amountItem={'20.000.000'}
                />

                <div className={classes.CardListItem_Link}>
                    <Link to="/">Add Transaction</Link>
                </div>
            </div>
    </div>

    )
}
