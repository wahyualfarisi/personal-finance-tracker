import React from 'react';
import './Transactions.css';
import TransactionInfo from '../../components/Transaction/TransactionInfo/TransactionInfo';
import TransactionDetail from '../../components/Transaction/TransactionDetail/TransactionDetail';

const Transaction = () => {

    return (
        <div className="TransactionContainer">

            <TransactionInfo />
            
            <TransactionDetail />

        </div>
    )
}


export default Transaction;