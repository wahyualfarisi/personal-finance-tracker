import { put, delay } from 'redux-saga/effects';
import * as authActions from './../actions/auth';
import * as authApi from './../../api/auth';

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
    const { email, password } = action.payload;

    yield put( authActions.authStart() );

    try{
        const res = yield authApi.login(email, password);
        const expirationDate = yield new Date( new Date().getTime() + res.data.expires_in * 1000 );
        //save to localStorage 
        yield localStorage.setItem('token', res.data.token);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', res.data.results.uuid);
        // //end ----------------

        yield put( authActions.authSuccess( res.data.token, res.data.results.uuid ) );
        yield put( authActions.authCheckTimeOut( res.data.expires_in ))
    }catch(err){
        yield put( authActions.authFail( err.response.data.message ) );
    }
}

export function* logoutInit( action ){
    yield put( authActions.logoutStart() );

    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');

    yield put( authActions.logoutDone());

}