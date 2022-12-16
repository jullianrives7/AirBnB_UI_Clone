import { BsDot } from "react-icons/all";
import { GiMedal } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";

const TitleSuperhost = () => {
  const { rentalData } = useContext(appContext);

  return (
    <div id="superhost">
      <BsDot />
      <GiMedal />
      <b>{"Superhost"}</b>
    </div>
  );
};

export default TitleSuperhost;
