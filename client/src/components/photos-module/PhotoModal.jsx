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
    <Modal show={showPhotoModal} fullscreen={true} onHide={handleHide}>
      <Modal.Body>
        <div id="photo-modal-header">
          <FaChevronLeft style={{ marginTop: "10px" }} onClick={handleHide} />
          <div style={{ float: "right" }}>
            <ShareButton />
            <SaveButton />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PhotosModal;
