//Where the state goes and checks actions files

import { GET_INFO, ADD_INFO, INFO_LOADING } from '../actions/types';


const initialState = {
    info: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INFO:
            return {
                ...state,
                info: action.payload,
                loading: false
            };
        case ADD_INFO:
            return {
                ...state,
                info: [action.payload, ...state.info]
            };
        case INFO_LOADING:
            return {
                ...state,
                loading: true

            }
        default:
            return state;
    }
}