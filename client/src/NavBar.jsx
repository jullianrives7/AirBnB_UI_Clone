import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LairBnB</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
