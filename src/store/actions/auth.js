import * as actionTypes from './actionTypes';


export const authInit = ( email, password, isSignUp ) => {
    return {
        type: actionTypes.AUTH_INIT,
        payload: {
            email: email,
            password: password,
            isSignUp: isSignUp
        }
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = ( token, userId ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    }
}

export const authFail = ( error ) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}