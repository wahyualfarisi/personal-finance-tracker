import * as actionTypes from './../actions/actionTypes';

const initialState = {
    isLoading: false,
    collections: [],
    error: null,
    response: null,
    redirect: false
}

export default (state = initialState, action) => {

    switch(action.type)
    {
        case actionTypes.CARD_START:
        return {
            ...state,
            isLoading: true 
        }

        case actionTypes.CARD_DONE:
        return {
            ...state,
            isLoading: false,
            response: action.payload
        }

        case actionTypes.CARD_FAILED:
        return {
            ...state,
            error: action.error   
        }

        default:
        return state
    }

}