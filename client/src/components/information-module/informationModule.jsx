import Modal from "react-bootstrap/Modal";
import InformationDesc from "./informationDescription/informationDesc";
import InformationSummary from "./informationSummary/informationSummary";

const InformationModule = () => {
  return (
    <div>
      
      <Modal.Dialog>
        <Modal.Body>
          <div className="titleContainerTitle">
              <InformationSummary />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div>
            <InformationDesc />
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationModule;
