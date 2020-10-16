import React , { Component } from 'react';
import classes from './Me.module.css';
import { Link } from 'react-router-dom'


class Me extends Component {


    render() {
        return (
            <div className={classes.MeContainer}>

                <div className={classes.CardList}>
                    <div className={classes.CardListContent}>
                        <h1>Card List</h1>
                        <div className={classes.CardListHeading}>
                            <h3>Collection</h3>
                            <Link to="/add"> ADD CARD </Link>
                        </div>
                    </div>

                    <div></div>
                </div>


                <div className={classes.CardTransaction}>
                    <div className={classes.CardTransactionContent}>
                        <div className={classes.CardTransactionHeading}>
                            <h6>Recent Transactions</h6>
                        </div>

                        <ul className={classes.CardTransactionList}>
                            <li className={classes.CardTransactionItem}>
                                <div className={classes.IconInc}></div>
                                <div className={classes.TransactionItem}>
                                    <h6>BCA BANK / 1239 8894 8847 3321</h6>
                                    <p>RP. 470.000</p>
                                </div>
                            </li>
                            <li className={classes.CardTransactionItem}>
                                <div className={classes.IconExp}></div>
                                <div className={classes.TransactionItem}>
                                    <h6>BCA BANK / 1239 8894 8847 3321</h6>
                                    <p>RP. 170.000</p>
                                </div>
                            </li>
                            <li className={classes.CardTransactionItem}>
                                <div className={classes.IconInc}></div>
                                <div className={classes.TransactionItem}>
                                    <h6>BCA BANK / 1239 8894 8847 3321</h6>
                                    <p>RP. 470.000</p>
                                </div>
                            </li>
                            <li className={classes.CardTransactionItem}>
                                <div className={classes.IconInc}></div>
                                <div className={classes.TransactionItem}>
                                    <h6>BCA BANK / 1239 8894 8847 3321</h6>
                                    <p>RP. 470.000</p>
                                </div>
                            </li>
                            <li className={classes.CardTransactionItem}>
                                <div className={classes.IconInc}></div>
                                <div className={classes.TransactionItem}>
                                    <h6>BCA BANK / 1239 8894 8847 3321</h6>
                                    <p>RP. 470.000</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Me;