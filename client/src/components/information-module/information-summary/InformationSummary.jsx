import Modal from "react-bootstrap/Modal";
import InformationGuest from "./InformationGuest";
import InformationBedrooms from "./InformationBedrooms";
import InformationBeds from "./InformationBeds";
import InformationBath from "./InformationBath";
import Image from "react-bootstrap/esm/Image";

const InformationSummary = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div>
            <span style={{ fontSize: "22px", fontFamily: "Circular-Md" }}>
              Entire cabin hosted by Alina
            </span>

            <div className="informationSummary">
              <InformationGuest />
              <InformationBedrooms />
              <InformationBeds />
              <InformationBath />
              <Image className="airbnb-pfp" src="./airbnb_host.png"></Image>
            </div>
          </div>
          <div className="informationSummaryContainerRows">
            <div className="informationSummaryContainerProfilePic"></div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationSummary;
