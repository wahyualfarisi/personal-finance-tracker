import { combineReducers } from 'redux';

import authReducers from './auth';
import cardReducers from './card';
import transactionReducers from './transactions';

const rootReducers = combineReducers({
    auth: authReducers,
    card: cardReducers,
    transactions: transactionReducers
});


export default rootReducers;