import * as actionTypes from './../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

export default (state = initialState, action) => {

    switch(action.type)
    {
        case actionTypes.AUTH_START:
        return {
            ...state,
            loading: true,
            error: null
        }

        case actionTypes.AUTH_SUCCESS:
        return {
            ...state,
            loading: false,
            token: action.token,
            userId: action.userId
        }

        case actionTypes.AUTH_FAIL:
        return {
            ...state,
            loading: false,
            error: action.error
        }

        case actionTypes.LOGOUT_START:
        return {
            ...state,
            loading: true 
        }

        case actionTypes.LOGOUT_DONE:
        return {
            token: null,
            userId: null,
            error: null,
            loading: false
        }



        default: 
        return state;
    }

}