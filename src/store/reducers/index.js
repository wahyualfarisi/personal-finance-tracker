import { combineReducers } from 'redux';

import authReducers from './auth';

const rootReducers = combineReducers({
    auth: authReducers
});


export default rootReducers;