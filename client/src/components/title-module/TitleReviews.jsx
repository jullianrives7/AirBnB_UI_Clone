import { BsDot } from "react-icons/all";
import { appContext } from "../../App";
import React, { useContext } from "react";

const TitleReviews = () => {
  const { ApiUrl, setRentalData, rentalData } = useContext(appContext);

  return (
    <div className="title_module_TitleReviews">
      <BsDot />{" "}
      <span style={{ fontFamily: "Circular-Md", fontSize: "15px" }}>
        <u>425 reviews</u>
      </span>
    </div>
  );
};

export default TitleReviews;
