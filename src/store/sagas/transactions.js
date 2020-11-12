import { put } from 'redux-saga/effects';
import * as transactionAct from './../actions/transactions';
import Axios from './../../axios-instance';


//load transaction 
export function* fetchTransactions( action ) {

    yield put( transactionAct.transactionStart() );

    const token = yield localStorage.getItem('token');

    try{
        const res = yield Axios.get(`/ft/card/${action.card_id}?token=${token}`);
        yield put( transactionAct.transactionLoadSuccess(res.data.results) );
        
    }catch(err){
        yield put( transactionAct.transactionFailed(err) );
    }
}

export function* addTransaction( action ){

    yield put( transactionAct.transactionAddStart() )

    const token = yield localStorage.getItem('token');

    try{
        const res = yield Axios.post(`/ft/transaction/add?token=${token}`, action.data );

        yield put( transactionAct.transactionAddSuccess( res.data.results ) );
    }catch(err){
        yield put( transactionAct.transactionAddFailed(err) )
    }

}