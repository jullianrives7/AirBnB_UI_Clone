import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const InformationAmen = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div>
            <h2>What this place offers</h2>
          </div>
          <Button variant="light" className="title_module_ShareButton">
            <h2><u>show all 56 amenities</u></h2>
          </Button>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationAmen;