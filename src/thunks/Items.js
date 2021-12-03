import axios from "axios";
import { getLocation, getfamilies, getProduct, getTransaction } from "../action";
const client = axios.create({
  baseURL: 'http://localhost:8000',
});
const token = localStorage.getItem('token');
console.log("token",token)
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`


export const requestLocation = () => async (dispatch) => {
  try {
    const response = await client.get('/locations');

    dispatch(getLocation(response.data));
    console.log("response", response.data)
  }
  catch (err) {
    console.log(err);
  }
}
export const requestFamilies = () => async (dispatch) => {
  try {
    const response = await client.get('/families');

    dispatch(getfamilies(response.data));
    console.log("response", response.data)
  }
  catch (err) {
    console.log(err);
  }
}

export const requestProduct = () => async (dispatch) => {
  try {
    const response = await client.get('/products');

    dispatch(getProduct(response.data));
    console.log("response", response.data)
  }
  catch (err) {
    console.log(err);
  }
}
export const requestTransaction = () => async (dispatch) => {
  try {
    const response = await client.get('/transactions');

    dispatch(getTransaction(response.data));
    console.log("response", response.data)
  }
  catch (err) {
    console.log(err);
  }
}