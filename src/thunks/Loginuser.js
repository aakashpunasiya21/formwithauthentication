import axios from "axios"
import { setToken } from "../action";
const client = axios.create({
  baseURL: 'http://localhost:8000',
});
export const Loginuser = (dataselector, history) => async (dispatch) => {
  try {
   
    const response = await client.post('/auth/login', dataselector);
    history.push("/loginsuccss")
    dispatch(setToken(response.data));
    const accessToken = localStorage.getItem('token')
    localStorage.setItem('token',response.data.access_token);
    
  }
  catch (err) {
    console.log(err);
  }
}