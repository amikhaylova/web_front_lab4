import { NotificationManager } from 'react-notifications';

export const initialState = {
    jwt: 'a',
    auth:false,
    points:[],
    current_r:'',
};

export function userReducer(state=initialState, action) {
    switch (action.type) {
        /*case 'ADD_POINT':
            let new_points = state.points.push(action.payload);
            return {...state, };*/
        case 'CHANGE_POINTS':
            return {...state, points:action.payload};
        case '@@redux-form/BLUR':
            if (action.meta.field == 'r'){
                return {...state, current_r:action.payload}
            }
            return {...state};
        case 'LOGIN_REQUEST':
            return {...state};

        case 'LOGIN_SUCCESS':
            return {...state, auth:true, jwt: action.payload.jwt};

        case 'LOGIN_FAIL':
            //alert('Не удалось авторизоваться');
            NotificationManager.success('You have added a new book!', 'Successful!', 2000);
            return {...state, auth:false,};

        case 'LOGOUT_SUCCESS':
            return {...state, auth:false, jwt:' ', points:[], current_r:''};

        case 'REG_REQUEST':
            return {...state};

        case 'REG_SUCCESS':
            return {...state};

        case 'REG_FAIL':
            return {...state};

        default:
            return state;
    }
}