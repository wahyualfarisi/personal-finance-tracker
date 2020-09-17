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
                <CreditCard />
                <CreditCard />
                <CreditCard />
                <CreditCard />
                <CreditCard />
                <CreditCard />
                <CreditCard />
                <CreditCard />
                <CreditCard />
                
            </div>
        </div>
    )
};


export default CardFinance;