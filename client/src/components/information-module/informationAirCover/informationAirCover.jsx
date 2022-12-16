import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const InformationAirCover = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div> <img className="airCoverImg" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"></img>
            <p className="airCoverDescription">
            Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
            </p>
            <div className="airCoverButton"><b><u>Learn more</u></b></div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationAirCover;