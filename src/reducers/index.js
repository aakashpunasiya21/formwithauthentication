import { combineReducers } from 'redux';
import {registrationReducer} from './registrationreducer';
import { login } from './login';
export default combineReducers({
    registrationReducer,
    login
});