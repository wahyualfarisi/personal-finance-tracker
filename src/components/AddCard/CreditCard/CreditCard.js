import React from 'react';
import classes from './CreditCard.module.css';
import CreditCardUI from './../../UI/Cards/CreditCard/CreditCard';

const CreditCard = ( { state } ) => {
    
    return (
        <div className={classes.AddCard_CreditCard}>
            <CreditCardUI 
                bank_name={state.add_form.bank_name.value}
                card_author={state.add_form.your_name.value}
                card_number={state.add_form.number_card.value}
                color={state.credit_card.colorText}
                type={state.credit_card.colorCard}
            />
        </div>
    )
};

export default CreditCard;

