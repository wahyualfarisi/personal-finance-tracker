import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/actionTypes';

import { authInit, logoutInit, authCheckStateSaga, authCheckTimeOutSaga } from './auth';
import { 
    submitCardInit, fetchCollections
} from './card';
import { fetchTransactions } from './transactions'


//Watching auth
function* watchAuth(){
    yield all([
        takeEvery( actionTypes.AUTH_INIT, authInit ),
        takeEvery( actionTypes.LOGOUT_INIT, logoutInit ),
        takeEvery( actionTypes.AUTH_CHECK_STATE, authCheckStateSaga ),
        takeEvery( actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeOutSaga ),
    ]);
};

function* watchCard() {
    yield all([
        takeEvery( actionTypes.CARD_INIT, submitCardInit ),
        takeEvery( actionTypes.LOAD_CARD_INIT, fetchCollections )
    ]);
}

function* watchTransaction(){
    yield all([
        takeEvery(actionTypes.TRANSACTION_LOAD_INIT,  fetchTransactions  )
    ])
}



export default function* rootSaga(){
    yield all([
        watchAuth(),
        watchCard(),
        watchTransaction()
    ])
}