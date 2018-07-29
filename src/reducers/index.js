import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import loadingReducer from './loading-reducer';

export default combineReducers({
    loading: loadingReducer,
    authenticated: authReducer
})