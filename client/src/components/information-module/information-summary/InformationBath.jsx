import { BsDot } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationBath = () => {
  const { rentalData } = useContext(appContext);
  return (
    <div className="title_module_InformationBath">
      <BsDot /> {rentalData.bathroom_count}
    </div>
  );
};

export default InformationBath;
