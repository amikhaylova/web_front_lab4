import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import {userReducer} from "./user";
import {reducer as notifications} from 'react-notification-system-redux';


 const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer,
    notifications: notifications,
 });

 export default rootReducer;