import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationDescModal = () => {
  const { showInformationDescModal, setShowInformationDescModal } =
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
          <div className="descModalParagraph">
            Nestled in the heart of the Big Thicket, our Naturalist Boudoir B&B
            has everything you need to revitalize your senses. Extremely private
            area for the naturalist with outdoor hot tub and shower. We welcome
            all guests to experience our lovely Naturalist Boudoir & reconnect
            with your special someone. Should your dates not be available for
            this cabin, please check out our additional cabins...Naturalist
            Boudoir TOO, Naturalist Boudoir on Point & Naturalist Boudoir RITZ.
            Check my profile for all.
          </div>
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
