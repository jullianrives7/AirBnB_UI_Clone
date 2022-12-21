import Modal from "react-bootstrap/Modal";
import ShareButton from "../title-module/ShareButton";
import SaveButton from "../title-module/SaveButton";
import { FaChevronLeft } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";
import Image from "react-bootstrap/Image";

function PhotosModal() {
  const {
    setShowPhotoSlideModal,
    showPhotoModal,
    setShowPhotoModal,
    photosData,
  } = useContext(appContext);
  const handleHide = () => {
    setShowPhotoModal(false);
  };
  const handleShow = () => {
    setShowPhotoSlideModal(true);
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
        <div id="all-photos">
          <div id="style1-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[0].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "499px" }}
              src={photosData[2].photo_url}
              onClick={() => {
                setPhotoSlide(true);
              }}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[1].photo_url}
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={photosData[3].photo_url}
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[4].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[5].photo_url}
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={photosData[6].photo_url}
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[7].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[8].photo_url}
              onClick={handleShow}
            />
          </div>
          <div id="style1-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[9].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "499px" }}
              src={photosData[10].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[11].photo_url}
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={photosData[12].photo_url}
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[13].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[14].photo_url}
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={photosData[15].photo_url}
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[16].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[17].photo_url}
              onClick={handleShow}
            />
          </div>
          <Image
            id="small-photo-2"
            style={{ width: "740px", height: "498px" }}
            src={photosData[18].photo_url}
            onClick={handleShow}
          />
          <div id="style2-photo">
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[19].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[20].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[21].photo_url}
              onClick={handleShow}
            />
            <Image
              id="small-photo-2"
              style={{ width: "367px", height: "246px" }}
              src={photosData[22].photo_url}
              onClick={handleShow}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PhotosModal;
