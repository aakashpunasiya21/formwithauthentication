import { GET_PRODUCT } from "../action"

const initialState = {
	products: []
}
export const getProduct = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCT:
			return {
				...state,
				products: action.payload
			}
  	default:
		return state;
	}
}