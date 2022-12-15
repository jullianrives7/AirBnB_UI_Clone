import { AiFillStar } from 'react-icons/ai'
import { appContext } from "../../App";
import React, { useContext } from "react";

const TitleStars = () => {
  const { ApiUrl,setRentalData,rentalData } = useContext(appContext);

    return (
      <div className="TitleStars"> 
        <AiFillStar /> <b>{rentalData.rating_avg}</b>
      </div>
  
    );
  };
  
  export default TitleStars;