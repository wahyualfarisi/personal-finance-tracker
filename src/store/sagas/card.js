import { put } from 'redux-saga/effects';
import * as cardActions from './../actions/card';
import Axios from './../../axios-instance';

export function* submitCardInit(action){
    yield put( cardActions.CardStart() )
    
    try{
        const res = yield Axios.post(`/card_collections.json?auth=${action.token}`, action.payload)
        console.log(res);
        yield put( cardActions.addCardDone(res) );
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