import * as actionTypes from './../actions/actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    response: null,

    collections: null,
    last_transactions: null
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


        /* Load Card Start  */
        case actionTypes.LOAD_CARD_START:
        return {
            ...state,
            isLoading: true 
        }

        /* Load Card success */
        case actionTypes.LOAD_CARD_SUCCESS:
        return {
            ...state,
            isLoading: false,
            error: null,
            collections: action.payload.collection,
            last_transactions: action.payload.last_transaction
        }

        case actionTypes.LOAD_CARD_FAILED:
        return {
            ...state,
            isLoading: false,
            error: action.error
        }



        default:
        return state
    }

}