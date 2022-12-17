import Modal from "react-bootstrap/Modal";
import { CiMedal } from "react-icons/all";
import { IoLocationOutline } from "react-icons/all";
import { AiOutlineCalendar } from "react-icons/all";

const InformationConsideration = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div className="superhost">
            <CiMedal />
            <div><b>Mike is a superhost</b></div>
            <div>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
          </div>
          <div className="greatHost">
            <IoLocationOutline />
            <div><b>Great location</b></div>
            <div>100% of recent guests gave the location a 5-star rating.</div>
          </div>
          <div className="Cancellation">
            <AiOutlineCalendar />
            <div><b>Free cancellation for 48 hours.</b></div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationConsideration;