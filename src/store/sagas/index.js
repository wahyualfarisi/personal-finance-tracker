import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/actionTypes';

import { authInit, logoutInit, authCheckStateSaga, authCheckTimeOutSaga } from './auth';


//Watching auth
function* watchAuth(){
    yield all([
        takeEvery( actionTypes.AUTH_INIT, authInit ),
        takeEvery( actionTypes.LOGOUT_INIT, logoutInit ),
        takeEvery( actionTypes.AUTH_CHECK_STATE, authCheckStateSaga ),
        takeEvery( actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeOutSaga )
    ]);
};



export default function* rootSaga(){
    yield all([
        watchAuth()
    ])
}