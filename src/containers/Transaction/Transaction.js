import React, { useEffect } from 'react';
import './Transactions.css';
import { connect } from 'react-redux';
import TransactionInfo from '../../components/Transaction/TransactionInfo/TransactionInfo';
import TransactionDetail from '../../components/Transaction/TransactionDetail/TransactionDetail';
import * as transactionAction from './../../store/actions/transactions';

const Transaction = ( props) => {
    
    useEffect( () => {
        let id = props.match.params.id;
        props.onLoadTransaction(id )

    }, [])

    return (
        <div className="TransactionContainer">

            <TransactionInfo credit_card={props.credit_card} isLoading={props.loading} />
            
            <TransactionDetail transactions={props.transaction} isLoading={props.loading} />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        transaction: state.transactions.transactions,
        credit_card: state.transactions.credit_card,
        loading: state.transactions.isLoading
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLoadTransaction: (card_id) => dispatch( transactionAction.transactionLoadInit(card_id) ) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Transaction);