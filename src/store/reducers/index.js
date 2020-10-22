import { combineReducers } from 'redux';

import authReducers from './auth';
import cardReducers from './card';

const rootReducers = combineReducers({
    auth: authReducers,
    card: cardReducers
});


export default rootReducers;