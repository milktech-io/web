import {combineReducers} from 'redux'

import user from './auth/reducer'

const reducers = combineReducers({
    user,
});

export default reducers;
