import { combineReducers } from 'redux';
import {registrationReducer} from './registrationreducer';
import { login } from './login';
import {getProduct} from './getProduct'
import {getLocation} from './getLocation'
import {getTransaction} from './getTransaction'
import {getFamilies} from './getFamilies'

export default combineReducers({
    registrationReducer,
    login,
    getProduct,
    getLocation,
    getTransaction,
    getFamilies
    
});