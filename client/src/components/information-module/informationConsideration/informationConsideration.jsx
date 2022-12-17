import Modal from "react-bootstrap/Modal";
import { CiMedal } from "react-icons/all";
import { IoLocationOutline } from "react-icons/all";
import { AiOutlineCalendar } from "react-icons/all";

const InformationConsideration = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div className="superHost">
            <CiMedal size={35} />
            <span className="isSuperHost" style={{ paddingLeft: "20px" }}>
              <b>Mike is a superhost</b>
              <div className="superHostDesc">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </div>
            </span>
          </div>
          <div className="greatHost">
            <IoLocationOutline size={35} />
            <span style={{ paddingLeft: "20px" }}>
              <b>Great location</b>
              <div>
                100% of recent guests gave the location a 5-star rating.
              </div>
            </span>
          </div>
          <div className="Cancellation">
            <AiOutlineCalendar size={35} />
            <span style={{ paddingLeft: "20px" }}>
              <b>Free cancellation for 48 hours.</b>
            </span>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationConsideration;
