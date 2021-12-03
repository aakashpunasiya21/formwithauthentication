import axios from "axios"
const client = axios.create({
  baseURL: 'http://localhost:8000',
});
export const requestUser = (dataselector) => async (dispatch) => {
  try {
    const response = await client.post('/auth/register', dataselector);
  }
  catch (err) {
    console.log(err);
  }
}