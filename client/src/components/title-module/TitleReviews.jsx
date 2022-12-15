import { BsDot } from 'react-icons/all'
import { appContext } from "../../App";
import React, { useContext } from "react";

const TitleReviews = () => {
  const { ApiUrl,setRentalData,rentalData } = useContext(appContext);

    return (
      <div className="title_module_TitleReviews"> 
        <BsDot /> <b><u>{rentalData.review_count}</u></b>
      </div>
  
    );
  };
  
  export default TitleReviews;