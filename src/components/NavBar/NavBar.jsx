import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
    <Navbar.Brand href="#">
        <NavLink to="/">
        React-Bootstrap
        </NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#">
          <NavLink to="/categoria/impresion">
          Impresion
          </NavLink>
        </Nav.Link>
        <Nav.Link href="#">
          <NavLink to="/categoria/computacion">
          Almacenamiento
          </NavLink>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <CartWidget/>
  </Container>
</Navbar>
    )
}

export default NavBar
