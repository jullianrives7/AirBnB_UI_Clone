import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { BiBed } from "react-icons/all";

const InformationAbout = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div>
            <div classname="sleepTitle">
              <span style={{ fontSize: "22px", fontFamily: "Circular-Md" }}>
                Where you'll sleep
              </span>
            </div>
            <div style={{ height: "20px" }}></div>
            <Card
              style={{ width: "14rem", height: "9rem", borderRadius: "14px" }}
            >
              <Card.Body>
                <div style={{ height: "5px" }}></div>
                <BiBed size={29} />
                <div style={{ height: "5px" }}></div>
                <div className="bedroom">
                  <b>Bedroom</b>
                </div>
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
