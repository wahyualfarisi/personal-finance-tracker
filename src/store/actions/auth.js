import * as actionTypes from './actionTypes';

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}

export const authCheckTimeOut = (expiresIn) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expiresIn
    }
}

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

export const logoutInit = () => {
    return {
        type: actionTypes.LOGOUT_INIT
    }
}

export const logoutStart = () => {
    return {
        type: actionTypes.LOGOUT_START
    }
}

export const logoutDone = () => {
    return {
        type: actionTypes.LOGOUT_DONE
    }
}