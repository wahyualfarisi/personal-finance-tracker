import React from 'react';
import './TransactionDetail.css';
import DetailList from './DetailList/DetailList';

const TransactionDetail = () => {
    return (
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

            <DetailList />
            
        </div>
    )
}

export default TransactionDetail;