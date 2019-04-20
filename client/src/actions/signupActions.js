//Where the client talks to the server to get, add, and delete items based on the type and payload that is sent

import axios from 'axios';
import { GET_INFO, ADD_INFO, INFO_LOADING } from './types';

export const getInfo = () => dispatch => {
    dispatch(setInfoLoading());
    axios.get('/api/signup')
        .then(res => dispatch({
            type: GET_INFO,
            payload: res.data
        }))
};

export const addInfo = info => dispatch => {
    axios.post('/api/signup', info)
        .then(res => dispatch({
            type: ADD_INFO,
            payload: res.data
        })
        )
};

 
export const setInfoLoading = () => {
    return {
        type: INFO_LOADING
    };
};