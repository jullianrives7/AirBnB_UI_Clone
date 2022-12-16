import { AiFillStar } from "react-icons/ai";
import { appContext } from "../../App";
import React, { useContext } from "react";

const TitleStars = () => {
  const { rentalData } = useContext(appContext);

  return (
    <div className="TitleStars">
      <AiFillStar /> <b>{"4.90"}</b>
    </div>
  );
};

export default TitleStars;
