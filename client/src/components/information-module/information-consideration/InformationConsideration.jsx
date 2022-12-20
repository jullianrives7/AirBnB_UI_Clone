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
            <CiMedal size={35} style={{ transform: "translate(0%, -12%)" }} />
            <span className="isSuperHost" style={{ paddingLeft: "20px" }}>
              <b style={{ fontSize: "16px", fontFamily: "Circular" }}>
                Alina is a Superhost
              </b>
              <div className="superHostDesc">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </div>
            </span>
          </div>
          <div className="greatHost">
            <IoLocationOutline
              size={35}
              style={{ transform: "translate(0%, -8%)" }}
            />
            <span style={{ paddingLeft: "20px" }}>
              <b style={{ fontSize: "16px" }}>Great location</b>
              <div style={{ color: "#717171" }}>
                100% of recent guests gave the location a 5-star rating.
              </div>
            </span>
          </div>
          <div className="Cancellation">
            <AiOutlineCalendar size={35} />
            <span style={{ paddingLeft: "20px" }}>
              <b style={{ fontSize: "16px", fontWeight: "600" }}>
                Free cancellation for 48 hours.
              </b>
            </span>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationConsideration;
