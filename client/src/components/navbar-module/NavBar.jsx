import Navbar from "react-bootstrap/Navbar";
import Brand from "./Brand";
import Search from "./Search";
import AirbnbYourHome from "./AirbnbYourHome";
import Globe from "./Globe";
import LoginDropdown from "./LoginDropdown";
import BorderBottom from "./BorderBottom";

function NavBar() {
  return (
    <div>
      <Navbar bg="white">
        <div id="navbar-container">
          <Brand />
          <Search />
          <AirbnbYourHome />
          <Globe />
          <LoginDropdown />
        </div>
      </Navbar>
      <BorderBottom />
    </div>
  );
}

export default NavBar;
