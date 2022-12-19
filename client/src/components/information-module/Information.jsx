import Modal from "react-bootstrap/Modal";

const InformationModule = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div className="InformationContainerInformation">
            <h2>2 Bed house in quiet neighborhood </h2>
          </div>
          <div className="InformationContainerRows">
            <InformationStars />
            <InformationReviews />
            <InformationLocation />
            <div className="InformationContainerButtons">
              <ShareButton />
              <SaveButton />
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationModule;