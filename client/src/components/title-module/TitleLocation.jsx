import { BsDot } from "react-icons/all";
import { appContext } from "../../App";
import React, { useContext } from "react";

const TitleLocation = () => {
  const { rentalData } = useContext(appContext);

  return (
    <div className="title_module_TitleLocation">
      <BsDot />
      <span style={{ fontFamily: "Circular-Md", fontSize: "15px" }}>
        <u>{rentalData.location}</u>
      </span>
    </div>
  );
};

export default TitleLocation;
