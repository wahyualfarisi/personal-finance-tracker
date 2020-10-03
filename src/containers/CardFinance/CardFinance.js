import React from 'react';
import classes from './CardFinance.module.css';
import CreditCard from '../../components/UI/Cards/CreditCard/CreditCard';
import { Link } from 'react-router-dom';


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
                    card_number="1233937993730383"
                    type="one" color="white" 
                />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233937993730383"
                    type="two" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233937993730383"
                    type="three" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233937993730383"
                    type="four" color="white" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233937993730383"
                    type="five" />
                <CreditCard 
                    bank_name="BANK NAME" 
                    card_author="Wahyu Alfarisi"
                    card_number="1233937993730383"
                    type="six" color="white" />
            </div>

            <div className="mt-20 Text-center">
                
                <Link to="/add"> ADD YOUR CARD </Link>
                
                
            </div>
            
            
        </div>
    )
};


export default CardFinance;