import * as actionTypes from './../actions/actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    response: null,

    credit_card: null,
    
    add_start_loading: false,
    transactions: null,

}

export default (state = initialState, action) => {
    

    switch(action.type)
    {
        case actionTypes.TRANSACTION_START:
            return {
                ...state,
                isLoading: true,
                error: null,
                credit_card: null,
                transactions: null
            }

        case actionTypes.TRANSACTION_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error 
            }

        case actionTypes.TRANSACTION_LOAD_SUCCESS:

            const { get_transactions, card_color, text_color, author_name,number,bank_name } = action.payload

            return {
                ...state,
                isLoading: false,
                error: null,
                transactions: get_transactions,
                credit_card: {
                    bank_name: bank_name,
                    card_color: card_color,
                    text_color: text_color,
                    author_name: author_name,
                    number: number
                }
            }


        case actionTypes.TRANSACTION_ADD_START:
            return {
                ...state,
                add_start_loading: true,
                error: null
            }

        case actionTypes.TRANSACTION_ADD_SUCCESS: 
            return {
                ...state,
                add_start_loading: false,
                error: null,
                transactions: [...state.transactions, action.payload],
            }

        case actionTypes.TRANSACTION_ADD_FAILED:
            return {
                ...state,
                add_start_loading: false,
                error: action.error
            }


        default:
            return state;
    }

}