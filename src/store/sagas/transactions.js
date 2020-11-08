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