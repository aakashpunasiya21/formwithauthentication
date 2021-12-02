import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Login from './Registration/Login';
import RegistrationPage from './Registration/RegistrationPage';
import loginSuccess from './component/loginSuccess';
function App() {
  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">User</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="/registration">Registration</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/registration" component={RegistrationPage}></Route>
        <Route path="/loginsuccss" component={loginSuccess}></Route>
      
      </Router>
    </>
  );

}

export default App;
