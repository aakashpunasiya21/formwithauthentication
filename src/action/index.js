export const SET_USER_REGISTRAION = 'SET_USER_REGISTRAION';
export const SET_LOGIN ='SET_LOGIN';
export const SET_TOKEN='SET_TOKEN';

export const setUserRegistration = (payload) => ({ type: SET_USER_REGISTRAION, payload })
export const setLogin =(payload) => ({type:SET_LOGIN,payload})
export const setToken =(payload) => ({type:SET_TOKEN,payload})