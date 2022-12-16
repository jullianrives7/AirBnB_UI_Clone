import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { BiBed } from "react-icons/all";

const InformationAbout = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div>
            <h2>Where you'll sleep</h2>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <BiBed />
                <div><b>Bedroom</b></div>
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
