import DropdownMenu from "./DropdownMenu";
import Image from "react-bootstrap/esm/Image";
import { GiHamburgerMenu } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";

const LoginDropdown = () => {
  const { showDropdown, setShowDropdown } = useContext(appContext);
  const handleClick = () => {
    if (showDropdown === false) {
      setShowDropdown(true);
      document.querySelector("#share-button").style.zIndex = "-1";
      document.querySelector("#save-button").style.zIndex = "-1";
    } else {
      setShowDropdown(false);
      document.querySelector("#share-button").style.zIndex = "auto";
      document.querySelector("#save-button").style.zIndex = "auto";
    }
  };
  return (
    <div id="login-dropdown" onClick={handleClick}>
      <GiHamburgerMenu
        style={{
          height: "16px",
          width: "16px",
          fill: "#222222",
        }}
      />
      <div id="person-svg-wrapper">
        <Image
          id="person-svg"
          src="./navbar-images/person.svg"
          style={{ height: "27px", width: "27px" }}
        ></Image>
      </div>
      <DropdownMenu />
    </div>
  );
};

export default LoginDropdown;
