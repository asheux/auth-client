import { combineReducers } from 'redux';

import registerReducer from './reducer.js';
import usersReducer from './getusersReducer.js';

const rootReducer = combineReducers({
    register: registerReducer,
    users: usersReducer
});
export default rootReducer;
