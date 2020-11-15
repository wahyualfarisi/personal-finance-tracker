import React from 'react';
import CreditCard from './../../UI/Cards/CreditCard/CreditCard';
import './TransactionInfo.css';
import Spinner from './../../UI/Spinner/Spinner';


const TransactionInfo = (props) => {
    
    let credit_card =  <Spinner />;
    let total_income = null, total_expense = null, total_balance = null;

    const calculateItem = (data) => {
        let sum = 0;
        for(let key in data)
        {
            sum += +data[key].amount
        }

        return sum;
    }


    if(!props.isLoading && props.credit_card){
        const { bank_name, author_name, number, card_color, text_color } = props.credit_card

        credit_card = (
            <CreditCard 
                bank_name={bank_name} 
                card_author={author_name}
                card_number={number}
                type={card_color} color={text_color} />
        );

        console.log('Transactions', props.transactions);

        let sum_income = 0, sum_expense = 0, balance = 0;

        if( props.transactions.length > 0 ){
            let income = props.transactions.filter(item => item.type === 'inc');
            let expense = props.transactions.filter(item => item.type === 'exp');

            sum_income = calculateItem(income);

            sum_expense = calculateItem(expense)

            balance = sum_income - sum_expense
        }

        total_income = (
            <div className="Transaction_Info-inc">
                <h5>Income</h5>
                <h4>{sum_income}</h4>
            </div>
        );

        total_expense = (
            <div className="Transaction_Info-exp">
                <h5>Expense</h5>
                <h4>{sum_expense}</h4>
            </div>
        )

        total_balance = (
            <div className="Transaction_Info-total_balance">
                <h2>Available Balance</h2>
                <h1>Rp. {balance}</h1>
            </div>
        )


    }

    return (
        <div className="Transaction_Info">
                <div className="Transaction_Info-credit_card">
                    {credit_card}
                </div>

                {total_balance}
                {total_income}
                {total_expense}
                
        </div>
    );
}

export default TransactionInfo;