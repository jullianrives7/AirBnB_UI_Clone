import { MdChevronRight } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";

const Location = () => {
  const { rentalData } = useContext(appContext);
  return (
    <div id="location-module-container">
      <span style={{ fontSize: "22px", fontFamily: "Circular-Md" }}>
        Where you'll be
      </span>
      <img
        src="./location-images/location-map.png"
        style={{ cursor: "grab" }}
      ></img>
      <h6>{rentalData.location}</h6>
      <span style={{ fontSize: "16px" }}>{rentalData.location_mini_desc}</span>
      <h6 style={{ marginTop: "5px" }}>
        <u>Show more</u>
        <MdChevronRight style={{ width: "21px", height: "21px" }} />
      </h6>
    </div>
  );
};

export default Location;
