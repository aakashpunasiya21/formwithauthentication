import { GET_FAMILIES } from "../action";
const inititalState={
 families : [],
} 
export const getFamilies = (state = inititalState,action) =>{
    switch (action.type) {
        case GET_FAMILIES:
            return{
                ...state,
                families : action.payload
            }
        default:
            return state;
    }
}