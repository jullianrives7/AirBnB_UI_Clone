import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsHouseDoorFill } from "react-icons/all";
import { TbWorld } from "react-icons/all";
import { BsPerson } from "react-icons/all";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <BsHouseDoorFill fill="white" stroke="white" />
        <Navbar.Brand href="#home">Lairbnb</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup id="input" className="mb-3">
              <Form.Control placeholder="Start Your search" />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Nav>
          <TbWorld fill="dark" stroke="white" />
          <Nav>
            <BsPerson
              fill="white"
              stroke="white"
              id="collasible-nav-dropdown"
            />
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Airbnb your home
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Host your experience
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
