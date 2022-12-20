import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationAirCover = () => {
  const { setShowAirCoverModal, ApiUrl, setRentalData, rentalData } =
    useContext(appContext);
  const handleClick = () => {
    setShowAirCoverModal(true);
  };
  return (
    <div>
      <div>
        {" "}
        <img
          className="airCoverImg"
          src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
        ></img>
        <p className="airCoverDescription">
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in.
        </p>
        <div className="airCoverButton" onClick={handleClick}>
          <b>
            <u>Learn more</u>
          </b>
        </div>
      </div>
    </div>
  );
};

export default InformationAirCover;
