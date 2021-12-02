import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Product from './Product';
import Location from './Location';
import Families from './Families';
import Transaction from './Transaction';

function LoginSuccess() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
              <li>
                <Link to="/families">Families</Link>
              </li>
              <li>
                <Link to="/transaction">Transaction</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/product" component={Product} />
            <Route path="/location" component={Location} />
            <Route path="/families" component={Families} />
            <Route path="/transaction" component={Transaction} />
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default LoginSuccess;
