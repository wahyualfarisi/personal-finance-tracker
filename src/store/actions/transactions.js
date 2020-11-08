import * as actionTypes from './actionTypes';

export const transactionStart = () => ({ type: actionTypes.TRANSACTION_START });
export const transactionFailed = (error) => ({ type: actionTypes.TRANSACTION_FAILED, error });


//Load Transaction
export const transactionLoadInit = ( card_id ) => ({ type: actionTypes.TRANSACTION_LOAD_INIT, card_id });
export const transactionLoadSuccess = (data) => ({ type: actionTypes.TRANSACTION_LOAD_SUCCESS, payload: data });
