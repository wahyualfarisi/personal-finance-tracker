import React from 'react';
import classes from './CardListContent.module.css';
import { CardListItem } from './CardListItem/CardListItem';
import { Heading } from './Heading/Heading';

import Spinner from './../../UI/Spinner/Spinner';

export const CardListContent = ({ collections , loading }) => {

    let cardItems = null;

    //check if collection is not null (default state) and loading is true
    if( !collections && loading ) { 
        cardItems = (
            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
             }}>
                <Spinner />
            </div>
        );
    }
    
    if(collections){
        cardItems = collections.length > 0 
                    ? 
                    collections.map(
                        item => {
                            let totalExp = 0, totalInc = 0;
                            
                            if(item.get_transactions.length > 0 ) {
                                
                                item.get_transactions.forEach(value => {
                                    if(value.type === 'exp'){
                                        totalExp += +value.amount;
                                    }else if(value.type === 'inc'){
                                        totalInc += +value.amount
                                    }
                                })

                            }

                            return (
                                <CardListItem 
                                    key={item.id}   
                                    card_color={item.card_color}
                                    text_color={item.text_color}
                                    author_name={item.author_name}
                                    number={item.number}
                                    sc_key={item.sc_key}
                                    bank_name={item.bank_name}
                                    expense={totalExp}
                                    income={totalInc}
                                /> 
                            )
                        }
                    ) 
                    : 
                    <h4>Card Empty</h4>
    }


    return (
        <div className={classes.CardListContent}>
            <h1>Card List</h1>
            <Heading />

            <div className={classes.CardListData}>
                {cardItems}
            </div>
        </div>
    )
}
