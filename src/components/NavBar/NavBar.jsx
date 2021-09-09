import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Impresion</Nav.Link>
        <Nav.Link href="#link">Almacenamiento</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <CartWidget/>
  </Container>
</Navbar>
    )
}

export default NavBar
