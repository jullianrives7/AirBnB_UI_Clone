import { AiFillStar } from "react-icons/ai";
import { appContext } from "../../App";
import React, { useContext } from "react";

const TitleStars = () => {
  const { rentalData } = useContext(appContext);

  return (
    <div className="TitleStars">
      <AiFillStar />{" "}
      <span style={{ fontFamily: "Circular-Md", fontSize: "15px" }}>
        {"4.90"}
      </span>
    </div>
  );
};

export default TitleStars;
