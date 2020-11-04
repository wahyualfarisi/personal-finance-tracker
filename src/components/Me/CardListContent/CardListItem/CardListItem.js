import React from 'react';
import classes from './CardListItem.module.css';
import CreditCard from './../../../UI/Cards/CreditCard/CreditCard';
import { Link } from 'react-router-dom';
import { Amount } from './Amount/Amount';

export const CardListItem = ({ card_color, text_color, author_name, number, sc_key, bank_name, expense, income  }) => (
    <div className={classes.CardListItem}>
        <div>
            <CreditCard 
                card_number={number}
                bank_name={bank_name}
                color={text_color}
                card_author={author_name}
                type={card_color}
            />
        </div>
        <div className={classes.CardListItem_Amount}>
            <Amount 
                icon="IconInc"
                titleItem="Income"
                amountItem={income}
            />
            <Amount 
                icon="IconExp"
                titleItem="Expense"
                amountItem={expense}
            />
            <Amount 
                icon="IconBalance"
                titleItem="Total Balance"
                amountItem={income - expense}
            />

            <div className={classes.CardListItem_Link}>
                <Link to={`/card/${sc_key}`}>Add Transaction</Link>
            </div>
        </div>
    </div>
)
