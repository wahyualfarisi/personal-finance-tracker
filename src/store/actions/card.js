import * as actionTypes from './actionTypes';


export const CardStart = () => ({ type: actionTypes.CARD_START });
export const addCardDone = (res) => ({ type: actionTypes.CARD_DONE, payload: res });
export const CardFailed = (error) => ({ type: actionTypes.CARD_FAILED, error: error });


export const addCardInit = ( form_data, token ) => {
    return {
        type: actionTypes.CARD_INIT,
        payload: form_data,
        token: token
    }
}
