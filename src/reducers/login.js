import { SET_LOGIN } from "../action";
const initialState = {
  login: {
    email: '',
    password: '',
  }
}
export const login = (state = initialState, action) => {
 
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        login: action.payload
      }
    default:
      return state
  }
}
