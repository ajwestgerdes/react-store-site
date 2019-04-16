//Where all the reducers meet

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    item: itemReducer
});