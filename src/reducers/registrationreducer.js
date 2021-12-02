import { SET_USER_REGISTRAION } from "../action";
const initialState = {
  data: {
    email: '',
    password: '',
  }
}
export const registrationReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case SET_USER_REGISTRAION:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
