import React from 'react';
import './TransactionDetail.css';
import DetailList from './DetailList/DetailList';
import EmptyCardImg from './../../../assets/images/empty_cart.svg';
import Icon from './../../UI/Icon/Icons';

const TransactionDetail = (props) => {
    console.log(props)

    let list = (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px'
        }}>
            <img src={EmptyCardImg} alt="" style={{ width: '200px' }} />
            <h1>Transactions List is Empty</h1>
            <p>Please add some transactions</p>
        </div>
    )

    if(props.transactions && !props.isLoading){

        if(props.transactions.length > 0) {
            
            list = props.transactions.map( (item, i) => <DetailList key={i} item={item} /> )
        }

    }


    return (
        <div className="Transaction_Detail">
            <form onSubmit={props.submit} className="Transaction_Detail-form" >

            <select name="type" onChange={(e) => props.change(e.target.value, 'type') }>
                <option value="">--</option>
                <option value="inc">Income</option>
                <option value="exp">Expense</option>
            </select>
            <input type="date" value={props.date} onChange={(e) => props.change(e.target.value, 'date')} />
            <input type="number" placeholder="amount" value={props.amount} onChange={(e) => props.change(e.target.value, 'amount')} />
            <input type="text" placeholder="Description" value={props.description} onChange={(e) => props.change(e.target.value, 'description')} />
            
            
        
            <button type="submit" disabled={!props.formIsValid}>
                {props.isLoading ? (
                <svg className="LoadingIcon">
                    <Icon name="spinner" />
                </svg>
                ) : 'ADD'}
            </button> 

            </form>

            {list}
            
        </div>
    )
}

export default TransactionDetail;