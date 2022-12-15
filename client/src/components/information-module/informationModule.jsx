import Modal from "react-bootstrap/Modal";
import InformationDesc from "./informationDescription/informationDesc";
import InformationSummary from "./informationSummary/informationSummary";
import InformationAmen from "./informationAmmen/informationAmmen";
import InformationAbout from "./informationAbout/informationAbout";

const InformationModule = () => {
  return (
    <div>
      
      <Modal.Dialog>
        <Modal.Body>
          <div className="informationContainerSummary">
              <InformationSummary />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerDesc">
            <InformationDesc />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerAmen">
            <InformationAbout />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerAbout">
            <InformationAmen />
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationModule;
