import Modal from "react-bootstrap/Modal";
import InformationGuest from "./informationGuest";
import InformationBeds from "./informationBedrooms";


const InformationSummary = () => {

  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div >
            <h2>Entire home hosted by Mike</h2>
            <div className="informationSummary">
            <InformationGuest />
            <InformationBeds />
            </div>

          </div>
          <div className="informationSummaryContainerRows">

            <div className="informationSummaryContainerProfilePic">
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationSummary;
