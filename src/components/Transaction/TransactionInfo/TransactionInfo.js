import React from 'react';
import CreditCard from './../../UI/Cards/CreditCard/CreditCard';
import './TransactionInfo.css';

const TransactionInfo = () => {
    return (
        <div className="Transaction_Info">
                <div className="Transaction_Info-credit_card">
                    <CreditCard 
                        bank_name="BANK NAME" 
                        card_author="Wahyu Alfarisi"
                        card_number="1233937993730383"
                        type="one" color="white" />
                </div>

                <div className="Transaction_Info-total_balance">
                    <h2>Available Balance</h2>
                    <h1>Rp. 30.000.000</h1>
                </div>

                <div className="Transaction_Info-inc">
                    <h5>Income</h5>
                    <h4>Rp. 50.000.000</h4>
                </div>

                <div className="Transaction_Info-exp">
                    <h5>Expense</h5>
                    <h4>Rp. 20.000.000</h4>
                </div>
        </div>
    );
}

export default TransactionInfo;