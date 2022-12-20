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
      <span style={{ fontFamily: "Circular", fontSize: "14px" }}>
        {"Superhost"}
      </span>
    </div>
  );
};

export default TitleSuperhost;
