import React from 'react';
import CreditCard from './../../UI/Cards/CreditCard/CreditCard';
import './TransactionInfo.css';
import Spinner from './../../UI/Spinner/Spinner';

const TransactionInfo = (props) => {
    
    let credit_card =  <Spinner />;


    if(!props.isLoading && props.credit_card){
        const { bank_name, author_name, number, card_color, text_color } = props.credit_card

        credit_card = (
            <CreditCard 
                bank_name={bank_name} 
                card_author={author_name}
                card_number={number}
                type={card_color} color={text_color} />
        );
    }

    return (
        <div className="Transaction_Info">
                <div className="Transaction_Info-credit_card">
                    {credit_card}
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