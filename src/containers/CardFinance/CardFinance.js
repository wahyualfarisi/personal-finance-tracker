import React from 'react';
import classes from './CardFinance.module.css';
import CreditCard from '../../components/UI/Cards/CreditCard/CreditCard';

const CardFinance = () => {

    return (
        <div className={classes.CardFinance}>
            <div className={classes.CardFinance_heading}>
                <h2>Select Your Favorite Cards</h2>
                <h5>Create Account / Login ?</h5>
            </div>

            <div className={classes.CardFinance_Container}>
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233 9379 9373 0383"
                    type="one" color="white" 
                />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233 9379 9373 0383"
                    type="two" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233 9379 9373 0383"
                    type="three" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233 9379 9373 0383"
                    type="four" color="white" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233 9379 9373 0383"
                    type="five" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233 9379 9373 0383"
                    type="six" color="white" />
            </div>

            <div className="mt-20 Text-center">
                ADD YOUR CARD
            </div>
            
        </div>
    )
};


export default CardFinance;