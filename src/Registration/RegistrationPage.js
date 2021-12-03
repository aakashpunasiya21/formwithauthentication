import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserRegistration } from '../action';
import { requestUser } from '../thunks/requestuser';

function RegistrationPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataselector = useSelector((state) => state.registrationReducer.data);
  console.log(dataselector)
  const handleChnage = (e) => {

    dispatch(setUserRegistration({ ...dataselector, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataselector.email.trim() == "" && dataselector.password.trim() == "") {
      alert("Email and Password must not be empty")
    } else {
      dispatch(requestUser(dataselector));
      history.push("/login");
    }
  }
  const handlePush = () => {
    history.push("/login")
  }
  return (
    <>
      <h1 className="text-center">Registration Page </h1>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-3" >
            <Form.Control
              id="floatingInputCustom"
              name="email"
              type="email"
              className="col-sm-4"
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
          </Form.Floating>
          <Button className="mt-2" type="submit">Registration</Button>{" "}

        </Form>
        <Button className="mt-2" type="submit" onClick={handlePush}>Login</Button>
      </div>
    </>
  );
}

export default RegistrationPage;
