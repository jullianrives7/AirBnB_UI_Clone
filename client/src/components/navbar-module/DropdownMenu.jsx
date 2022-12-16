import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { appContext } from "../../App";

const DropdownMenu = () => {
  const { showDropdown } = useContext(appContext);
  const redirect_1 = () => {
    window.location.assign("https://www.airbnb.com/host/homes");
  };
  const redirect_2 = () => {
    window.location.assign(
      "https://www.airbnb.com/host/experiences?from_nav=1"
    );
  };
  const redirect_3 = () => {
    window.location.assign("https://www.airbnb.com/help?audience=guest");
  };
  return (
    <Dropdown.Menu id="dropdown-menu" show={showDropdown} align={"end"}>
      <Dropdown.Item>Sign up</Dropdown.Item>
      <Dropdown.Item>Log in</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={redirect_1}>Airbnb your home</Dropdown.Item>
      <Dropdown.Item onClick={redirect_2}>Host and experience</Dropdown.Item>
      <Dropdown.Item onClick={redirect_3}>Help</Dropdown.Item>
    </Dropdown.Menu>
  );
};

export default DropdownMenu;
