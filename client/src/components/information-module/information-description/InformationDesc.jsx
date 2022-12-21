import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationDesc = () => {
  const { rentalData, setShowInformationDescModal } = useContext(appContext);
  const handleClick = () => {
    setShowInformationDescModal(true);
  };

  return (
    <div>
      <div>
        <p style={{ fontSize: "16px", lineHeight: "24px" }}>
          {rentalData.rental_desc}
        </p>
      </div>
      <div className="informationShowMoreButton" onClick={handleClick}>
        <span className="showMoreSpan">
          <b>
            <u>Show more</u>
          </b>
        </span>
      </div>
    </div>
  );
};

export default InformationDesc;
