import Navbar from "react-bootstrap/Navbar";
import BorderBottom from "./BorderBottom";
import { Link } from "react-scroll";

function NavBarSecondary() {
  return (
    <div>
      <Navbar bg="white" id="navbar-secondary-wrapper">
        <div id="navbar-secondary-container">
          <Link to="navbar-container" spy={true} smooth={true}>
            <span id="navbar-secondary-text">Photos</span>
          </Link>
          <Link to="sleepTitle" spy={true} smooth={true}>
            <span id="navbar-secondary-text">Amenities</span>
          </Link>
          <Link to="reviews-spring" spy={true} smooth={true}>
            <span id="navbar-secondary-text">Reviews</span>
          </Link>
          <Link to="location-module-container" spy={true} smooth={true}>
            <span id="navbar-secondary-text">Location</span>
          </Link>
        </div>
      </Navbar>
    </div>
  );
}

export default NavBarSecondary;
