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
            <div style={{height: '20px'}}></div>
            <Card style={{ width: '12rem', borderRadius: '14px'}}>
              <Card.Body>
                <BiBed size={26}/>
                <div className="bedroom"><b>Bedroom</b></div>
                <div className="queenBed">1 queen bed</div>
              </Card.Body>
            </Card>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationAbout;
