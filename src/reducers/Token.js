import { SET_TOKEN } from "../action";
const initialState = {
  token: [],
}
export const Token = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
  }
}