import React from 'react';
import classes from './CreditCard.module.css';

const CreditCard = () => {

    return (
        <div className={classes.CreditCard} >
            <header>
                <div className={classes.CreditCard_Logo}>
                    <div>
                        <span>AL</span>
                    </div>
                        <span className={classes.CreditCard_Logo_BankName}>ALFARISI BANK ASIA</span>
                </div>
            </header>
            <div className={classes.CreditCard_Icon_Sim}></div>
            <div className={classes.CreditCard_Number}> 4715 6109 5211 3010 </div>
            <div className={classes.CreditCard_Author}>Wahyu Alfarisi</div>
        </div>
    )
}

export default CreditCard;