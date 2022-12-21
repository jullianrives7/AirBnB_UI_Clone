import { useContext } from "react";
import { appContext } from "../../../App";

const InformationGuest = () => {
  const { rentalData } = useContext(appContext);
  return <div className="InformationGuest">{rentalData.max_guests}</div>;
};

export default InformationGuest;
