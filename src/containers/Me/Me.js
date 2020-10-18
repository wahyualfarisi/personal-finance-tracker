import React , { Component } from 'react';
import classes from './Me.module.css';
import { CardListContent } from '../../components/Me/CardListContent/CardListContent';
import { RecentTransaction } from '../../components/Me/RecentTransaction/RecentTransaction';

class Me extends Component {

    render() {
        return (
            <div className={classes.MeContainer}>
                <div className={classes.CardList}>
                   <CardListContent />
                </div>

                <div className={classes.CardTransaction}>
                   <RecentTransaction />
                </div>
            </div>
        )
    }
}

export default Me;