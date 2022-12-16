import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { appContext } from "../../../App";

const AirCoverModal = () => {
  const { showAirCoverModal, setShowAirCoverModal } = useContext(appContext);
  const handleHide = () => {
    setShowAirCoverModal(false);
  };
  const handleClick = () => {
    window.location.assign("https://www.airbnb.com/help/article/3218");
  };

  return (
    <Modal show={showAirCoverModal} onHide={handleHide}>
      <Modal.Header closeButton>
        <div>
          <img
            className="airCoverImg"
            src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
          ></img>
          <p className="airCoverDescription">
            AirCover is comprehensive protection included for free with every
            booking.
          </p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div >
          <div>
            <b>Booking Protection Guarantee</b>
          </div>
          <div>
            In the unlikely event a Host needs to cancel your booking within 30
            days of check-in, we’ll find you a similar or better home, or we’ll
            refund you.
          </div>
        </div>
        <div className="checkInGuarantee">
          <div>
            <b>Check-In Guarantee</b>
          </div>
          <div>
            If you can’t check into your home and the Host cannot resolve the
            issue, we’ll find you a similar or better home for the length of
            your original stay, or we’ll refund you..
          </div>
        </div>
        <div className="getGuarantee">
          <div>
            <b>Get-What-You-Booked Guarantee</b>
          </div>
          <div>
            If at any time during your stay you find your listing isn't as
            advertised—for example, the refrigerator stops working and your Host
            can’t easily fix it, or it has fewer bedrooms than listed—you'll
            have three days to report it and we’ll find you a similar or better
            home, or we’ll refund you.
          </div>
        </div>
        <div className="safetyLine">
          <div>
            <b>24-hour Safety Line</b>
          </div>
          <div>
            If you ever feel unsafe, you’ll get priority access to
            specially-trained safety agents, day or night.
          </div>
        </div>
        <div className="helpCenter" >
          Find complete details on how AirCover protects your booking in our{" "}
          <div>
            <span onClick={handleClick}><b><u>Help Center</u></b></span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AirCoverModal;
