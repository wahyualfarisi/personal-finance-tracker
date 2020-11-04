import { put } from 'redux-saga/effects';
import * as cardActions from './../actions/card';
import Axios from './../../axios-instance';

//Submit Card
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
    yield put( cardActions.LoadCardStart() );

    const token = yield localStorage.getItem('token');

    try{    
        const res = yield Axios.get(`/ft/card?token=${token}`);
        
        yield put( cardActions.LoadCardSuccesss( res.data.results ))

    }catch(err){
        yield put( cardActions.LoadCardFailed(err) )
    }

}