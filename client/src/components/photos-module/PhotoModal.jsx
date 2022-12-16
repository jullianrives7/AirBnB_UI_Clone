import Modal from "react-bootstrap/Modal";
import ShareButton from "../title-module/ShareButton";
import SaveButton from "../title-module/SaveButton";
import { FaChevronLeft } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";

function PhotosModal() {
  const { showPhotoModal, setShowPhotoModal } = useContext(appContext);
  const handleHide = () => {
    setShowPhotoModal(false);
  };

  return (
    <Modal
      show={showPhotoModal}
      fullscreen={true}
      onHide={handleHide}
      scrollable
    >
      <Modal.Body>
        <div id="photo-modal-header">
          <div id="arrow-left-wrapper">
            <FaChevronLeft
              id="arrow-left"
              style={{ marginTop: "10px" }}
              onClick={handleHide}
            />
          </div>
          <div id="photo-modal-buttons" style={{ float: "right" }}>
            <ShareButton />
            <SaveButton />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PhotosModal;
