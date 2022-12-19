import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/esm/Image";

const Brand = () => {
  const handleClick = () => {
    window.location.assign("https://www.airbnb.com/");
  };
  return (
    <Navbar.Brand onClick={handleClick}>
      <Image id="airbnb-logo" src="./airbnb_logo.svg"></Image>
    </Navbar.Brand>
  );
};

export default Brand;
