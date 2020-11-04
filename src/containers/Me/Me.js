import React , { useEffect } from 'react';
import classes from './Me.module.css';
import { CardListContent } from '../../components/Me/CardListContent/CardListContent';
import { RecentTransaction } from '../../components/Me/RecentTransaction/RecentTransaction';

import { connect } from 'react-redux';
import * as actionsCard from './../../store/actions/card';



const Me = ({ onLoadInit, collections, last_transactions, loading }) => {

    useEffect( () => {

        onLoadInit()

    }, [])

    return (
        <div className={classes.MeContainer}>
            <div className={classes.CardList}>
               <CardListContent 
                    collections={collections}
                    loading={loading}
               />
            </div>

            <div className={classes.CardTransaction}>
               <RecentTransaction 
                    last_transactions={last_transactions}
                    loading={loading}
               />
            </div>
        </div>
    )
} 

const mapStateToProps = state =>  {
    return {
        collections: state.card.collections,
        last_transactions: state.card.last_transaction,
        loading: state.card.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadInit: () => dispatch( actionsCard.LoadCardInit() ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Me);