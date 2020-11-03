import { put } from 'redux-saga/effects';
import * as cardActions from './../actions/card';
import Axios from './../../axios-instance';

export function* submitCardInit(action){
    yield put( cardActions.CardStart() )
    
    const token = yield localStorage.getItem('token');

    try{
        const res = yield Axios.post(`/ft/card/add?token=${token}`, action.payload)
        
        yield put( cardActions.addCardDone(res.data) );
    }catch(err) {
        yield put( cardActions.CardFailed(err) )
    }
}

export function* fetchCollections() {
    yield put( cardActions.CardStart() );

    try{

    }catch(err){
        yield put( cardActions.CardFailed(err) )
    }

}