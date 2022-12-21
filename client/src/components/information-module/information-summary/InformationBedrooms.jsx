import { BsDot } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationBedrooms = () => {
  const { rentalData } = useContext(appContext);
  return (
    <div className="title_module_InformationBedrooms">
      <BsDot /> {rentalData.room_count}
    </div>
  );
};

export default InformationBedrooms;
