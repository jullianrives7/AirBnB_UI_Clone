import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationDescModal = () => {
  const { rentalData, showInformationDescModal, setShowInformationDescModal } =
    useContext(appContext);
  const handleHide = () => {
    setShowInformationDescModal(false);
  };

  return (
    <Modal
      show={showInformationDescModal}
      onHide={handleHide}
      scrollable
      aria-labelledby="infoDescModalAria"
      id="infoDescModalAria"
    >
      <Modal.Body closeButton>
        <div>
          <div className="descModalAbout">
            <b>About this space</b>
          </div>
          <div className="descModalParagraph">{rentalData.rental_desc}</div>
        </div>
        <div>
          <div className="descModalSpace">
            <b>The space</b>
          </div>
          <div className="descModalParagraph">
            Ready to unplug and get back to nature, come check out Naturalist
            Boudoir.
          </div>
        </div>
        <div>
          <div className="descModalAccess">
            <b>Guest access</b>
          </div>
          <div className="descModalParagraph">
            Naturalist Boudoir is an unusual space where one can get back to
            nature in a peaceful, private setting.
          </div>
        </div>
        <div>
          <div className="descModalNote">
            <b>Other things to note</b>
          </div>
          <div className="descModalParagraph">
            As you are actually in nature, you may encounter God's creatures of
            the woods.
          </div>
          <div style={{ height: "1em" }}></div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InformationDescModal;
