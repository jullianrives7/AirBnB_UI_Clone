import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/esm/Image";
import { BsHouseDoorFill } from "react-icons/all";
import { BiGlobe } from "react-icons/all";
import { BsPerson } from "react-icons/all";
import { BiSearchAlt2 } from "react-icons/all";

function NavBar() {
  return (
    // <Navbar id="display" bg="dark" className="mb-3">
    //   <Container fluid>
    //     <BsHouseDoorFill id="house-icon" fill="white" stroke="white" />
    //     <Navbar.Brand id="brand" href="#home">
    //       lairbnb
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
    //     <Navbar.Offcanvas
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="end"
    //     >
    //       <Offcanvas.Header closeButton>
    //         <Offcanvas.Title id="offcanvasNavbarLabel">
    //           Offcanvas
    //         </Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <Nav className="justify-content-end flex-grow-1 pe-3">
    //           <div id="search">
    //             <Button id="button" variant="light">
    //               Start your search
    //               <div id="icon-background">
    //                 <BiSearchAlt2
    //                   id="search-icon"
    //                   fill="white"
    //                   stroke="white"
    //                 />
    //               </div>
    //             </Button>
    //           </div>
    //           <Nav.Link id="link" href="#action1">
    //             Lairbnb your home
    //             <TbWorld id="world-icon" fill="dark" stroke="white" />
    //           </Nav.Link>
    //           <div id="drop-down-bg">
    //             <NavDropdown id="offcanvasNavbarDropdown">
    //               <NavDropdown.Item href="#action3">sign up</NavDropdown.Item>
    //               <NavDropdown.Item href="#action3">Log in</NavDropdown.Item>
    //               <NavDropdown.Divider />
    //               <NavDropdown.Item href="#action5">
    //                 Lairbnb your home
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="#action5">
    //                 Host your experience
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="#action5">Help</NavDropdown.Item>
    //             </NavDropdown>
    //             <div id="person-icon-background">
    //               <BsPerson id="person-icon" fill="white" stroke="white" />
    //             </div>
    //           </div>
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>
    <div>
      <Navbar bg="white">
        <div id="navbar-container">
          <Navbar.Brand>
            <Image id="airbnb-logo" src="./airbnb.svg" color="danger"></Image>
          </Navbar.Brand>
          <div id="search">
            {"Start your seach"}
            <div id="mag-btn">
              <BiSearchAlt2
                fill="white"
                style={{ height: "15px", width: "15px" }}
              />
            </div>
          </div>
          <div id="airbnb-your-home">Airbnb your home</div>
          <div id="globe-icon">
            <BiGlobe style={{ width: "19px", height: "19px" }} />
          </div>

          {/* <div id="drop-down-bg">
            <NavDropdown id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="#action3">sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Log in</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Lairbnb your home
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Host your experience
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Help</NavDropdown.Item>
            </NavDropdown>
            <div id="person-icon-background">
              <BsPerson id="person-icon" fill="white" stroke="white" />
            </div>
          </div> */}
        </div>
      </Navbar>
      <div id="border-bottom"></div>
    </div>
  );
}

export default NavBar;
