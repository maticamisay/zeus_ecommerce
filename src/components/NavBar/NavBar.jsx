import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Zeus Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Impresión" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Cartuchos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Tintas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Papel fotográfico</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Computación" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Almacenamiento</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Periféricos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Componentes</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
