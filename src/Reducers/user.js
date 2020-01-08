import browserHistory from 'react-router'

export const initialState = {
    login: 'anonymous',
    password: '',
    auth:false,
    is_authing:false,
    redirect: false,
};

export function userReducer(state=initialState, action) {
    switch (action.type) {
        case 'DATA_IS_FETCHING':{
            return {...state, is_authing: true};
        }
        case 'FETCH_DATA':{
            console.log(action.payload.auth);
            if (action.payload.auth == 'true'){
                return {...state, auth: Boolean(action.payload.auth), redirect:true, is_authing:false};
            }
            return {...state, auth: Boolean(action.payload.auth),is_authing:false};
        }
        case 'FETCH_DATA_ERROR':{
            console.log("ОШИИИИИБКА");
            console.log(action.payload);
            return {...state, is_authing:false};
        }

        case 'LOG_OUT':{
            return {...state, redirect: false, auth: false};
        }
        default:
            return state;
    }
}