import React from 'react';
import './Transactions.css';
import CreditCard from '../../components/UI/Cards/CreditCard/CreditCard';

const Transaction = () => {


    return (
        <div className="TransactionContainer">
            
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

            <div className="Transaction_Detail">
               <div className="Transaction_Detail-form" >
                    <select>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                    <input type="date" />
                    <input type="text" placeholder="amount" />
                    <input type="text" placeholder="Description" />
                    <button type="submit">ADD</button>
               </div>
            </div>

        </div>
    )
}


export default Transaction;