import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { BiBed } from "react-icons/all";

const InformationAbout = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div>
            <div classname="sleepTitle"><b>Where you'll sleep</b></div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <BiBed size={32}/>
                <div className="bedroom"><b>Bedroom</b></div>
                <div>1 queen bed</div>
              </Card.Body>
            </Card>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationAbout;
