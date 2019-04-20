//Brings together all other reducers

import { combineReducers } from 'redux';
import signupReducer from './signupReducer';

export default combineReducers({
    signup: signupReducer
});