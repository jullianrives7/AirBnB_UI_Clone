import { BsDot } from 'react-icons/all'
import { appContext } from "../../App";
import React, { useContext } from "react";

const TitleLocation = () => {
  const { ApiUrl,setRentalData,rentalData } = useContext(appContext);
  console.log(rentalData)
    return (
      <div className="title_module_TitleLocation"> 
        <BsDot /> <b><u>{rentalData.location}</u></b>
      </div>
  
    );
  };
  
  export default TitleLocation;