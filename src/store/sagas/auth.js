import { put } from 'redux-saga/effects';
import * as authActions from './../actions/auth';

import Axios from 'axios';


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
    }catch(err){
        yield put( authActions.authFail( err.response.data.error ) );
    }


}