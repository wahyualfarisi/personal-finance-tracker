import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/actionTypes';

import { authInit } from './auth';


//Watching auth
function* watchAuth(){
    yield all([
        takeEvery( actionTypes.AUTH_INIT, authInit )
    ])
};



export default function* rootSaga(){
    yield all([
        watchAuth()
    ])
}