import { put, delay } from 'redux-saga/effects';
import * as authActions from './../actions/auth';

import Axios from 'axios';

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    const userId = yield localStorage.getItem('userId');

    // for debug purposes
    // const expirationDate = 'Wed Oct 07 2020 19:20:00 GMT+0700 (Western Indonesia Time)';

    const expirationDate = yield localStorage.getItem('expirationDate');

    if( !token ){
        yield put( authActions.logoutInit( ) )
    }else {
        const tokenDateExp = yield new Date( expirationDate );

        if( tokenDateExp <= new Date() ) {

            yield put( authActions.logoutInit() )

        }else{

            yield put( authActions.authSuccess( token, userId ) )
            yield put( authActions.authCheckTimeOut( (tokenDateExp.getTime() - new Date().getTime()) / 1000 ) )
            
        }
    }
}

export function* authCheckTimeOutSaga(action) {
    yield delay( action.expiresIn * 1000 );
    yield put( authActions.logoutInit() )
}


export function* authInit( action ) {
    const { email, password, isSignUp } = action.payload;

    yield put( authActions.authStart() );

    const authData = { 
        email, 
        password, 
        returnSecureToken: true 
    };
    
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAY0LVtm86E1YH5XAIbc0jt7WnbZ52j6Q0`
    if(!isSignUp){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAY0LVtm86E1YH5XAIbc0jt7WnbZ52j6Q0`
    }

    try{
        const res = yield Axios.post(url, authData);
        const expirationDate = yield new Date( new Date().getTime() + res.data.expiresIn * 1000 );

        //save to localStorage 
        yield localStorage.setItem('token', res.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', res.data.localId);
        //end ----------------

        yield put( authActions.authSuccess( res.data.idToken, res.data.localId ) );
        yield put( authActions.authCheckTimeOut( res.data.expiresIn ))
    }catch(err){
        yield put( authActions.authFail( err.response.data.error ) );
    }
}

export function* logoutInit(action){
    yield put( authActions.logoutStart() );

    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');

    yield put( authActions.logoutDone());

}