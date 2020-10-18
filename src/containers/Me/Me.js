import React , { Component } from 'react';
import classes from './Me.module.css';
import { CardListContent } from '../../components/Me/CardListContent/CardListContent';
import { RecentTransaction } from '../../components/Me/RecentTransaction/RecentTransaction';
import axios from './../../axios-instance';

class Me extends Component {

    componentDidMount = () => {
        const userId = localStorage.getItem('userId');
        const token  = localStorage.getItem('token');
        
        axios.get(`/card_collections.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

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