export const SET_USER_REGISTRAION = 'SET_USER_REGISTRAION';
export const SET_LOGIN ='SET_LOGIN';
export const SET_TOKEN='SET_TOKEN';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_LOCATION = 'GET_LOCATION';
export const GET_TRANSACTION = 'GET_TRANSACTION';
export const GET_FAMILIES= 'GET_FAMILIES';

export const setUserRegistration = (payload) => ({ type: SET_USER_REGISTRAION, payload })
export const setLogin =(payload) => ({type:SET_LOGIN,payload})
export const setToken =(payload) => ({type:SET_TOKEN,payload})
export const getProduct = (payload) =>({type:GET_PRODUCT,payload})
export const getLocation = (payload) => ({type:GET_LOCATION,payload})
export const getTransaction = (payload) =>({type:GET_TRANSACTION,payload})
export const getfamilies = (payload) => ({type:GET_FAMILIES,payload})