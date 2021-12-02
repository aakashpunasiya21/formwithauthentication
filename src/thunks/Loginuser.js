import axios from "axios"
import { setToken } from "../action";
const client = axios.create({
  baseURL: 'http://localhost:8000',
});
export const Loginuser = (dataselector, history) => async (dispatch) => {
  try {
    console.log("bcdjhj", history)
    console.log("data", dataselector);
    const response = await client.post('/auth/login', dataselector);
    history.push("/loginsuccss")
    dispatch(setToken(response.data));
    const accessToken = localStorage.getItem("token") || '[]'
    const paresToken = JSON.parse(accessToken)
    paresToken.push({
      token: (response.data.access_token)
    })
    localStorage.setItem('token', JSON.stringify(paresToken));
  }
  catch (err) {
    console.log(err);
  }
}