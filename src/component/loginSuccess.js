import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, NavLink, Nav, Container } from "react-bootstrap";

import { useHistory } from 'react-router';
import React from 'react';
import Product from './Product';
import Location from './Location';
import Families from './Families';
import Transaction from './Transaction';
import {Button} from 'react-bootstrap'
import Login from '../Registration/Login';
function LoginSuccess() {
  const history = useHistory();
  const handleSubmit = () =>{
    localStorage.removeItem("token");
    history.push("/login")
  }
  return (
    <>
    <Button className="text-center" onClick={handleSubmit}>Logout</Button>
      <Router>
        <div>
        <Navbar>
          <Container>
          
            <Nav className="me-auto">
              <Link className="mx-3" to="/product">
                Product
              </Link>
              <Link className="mx-3" to="/location">
               Location
              </Link>
              <Link className="mx-3" to="/families">
               Family
              </Link>
              <Link className="mx-3" to="/transaction">
               Transaction
              </Link>
            </Nav>
          </Container>
        </Navbar>
      
          <Switch>
            <Route path="/product" component={Product} />
            <Route path="/location" component={Location} />
            <Route path="/families" component={Families} />
            <Route path="/transaction" component={Transaction} />
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default LoginSuccess;
