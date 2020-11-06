import * as actionTypes from './actionTypes';

// Add Card Actions 
export const CardStart = () => ({ type: actionTypes.CARD_START });
export const addCardDone = (res) => ({ type: actionTypes.CARD_DONE, payload: res });
export const CardFailed = (error) => ({ type: actionTypes.CARD_FAILED, error: error });
export const addCardInit = ( form_data ) => {
    return {
        type: actionTypes.CARD_INIT,
        payload: form_data
    }
}

//Clear Response to null
export const ClearResponse = () => ({ type:actionTypes.CLEAR_RESPONSE });


//Fetch Card Actions ----------------------------------------------------------------------------
export const LoadCardInit = () => ({ type: actionTypes.LOAD_CARD_INIT });
export const LoadCardStart = () => ({ type: actionTypes.LOAD_CARD_START });
export const LoadCardSuccesss = (res) => ({ type: actionTypes.LOAD_CARD_SUCCESS, payload: res });
export const LoadCardFailed = (error) => ({ type: actionTypes.LOAD_CARD_FAILED, error });

//End Fetch Card Actions ----------------------------------------------------------------------------