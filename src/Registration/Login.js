import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setLogin } from '../action';
import { Loginuser } from '../thunks/Loginuser';


function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const dataselector = useSelector((state) => state.login.login);
  console.log(dataselector)
  const handleChnage = (e) => {
    dispatch(setLogin({ ...dataselector, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Loginuser(dataselector,history))
  }


  return (
    <>
      <h1 className="text-center">Login Page </h1>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-3" >
            <Form.Control
              id="floatingInputCustom"
              name="email"
              type="email"

              placeholder="name@example.com"
              onChange={handleChnage}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChnage}
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
            <Button type="submit">Login</Button>
          </Form.Floating>
        </Form>
      </div>
    </>
  );
}

export default Login;
