import { BsDot } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationBeds = () => {
  const { rentalData } = useContext(appContext);
  return (
    <div className="title_module_InformationBeds">
      <BsDot /> {rentalData.bed_count}
    </div>
  );
};

export default InformationBeds;
