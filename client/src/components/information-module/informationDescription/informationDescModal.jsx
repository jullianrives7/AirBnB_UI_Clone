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
    <Modal show={showInformationDescModal} onHide={handleHide}>
      <Modal.Body>
        <div>
          <b>About this space</b>
          <div>Nestled in the heart of the Big Thicket, our Naturalist Boudoir B&B has everything you need to revitalize your senses. Extremely private area for the naturalist with outdoor hot tub and shower. We welcome all guests to experience our lovely Naturalist Boudoir & reconnect with your special someone. Should your dates not be available for this cabin, please check out our additional cabins...Naturalist Boudoir TOO, Naturalist Boudoir on Point & Naturalist Boudoir RITZ. Check my profile for all.</div>
        </div>
        <div>
            <b>The space</b>
            <div>Ready to unplug and get back to nature, come check out Naturalist Boudoir.</div>
        </div>
        <div>
            <b>Guest access</b>
            <div>Naturalist Boudoir is an unusual space where one can get back to nature in a peaceful, private setting.</div>
        </div>
        <div>
            <b>Other things to note</b>
            <div>As you are actually in nature, you may encounter God's creatures of the woods.</div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InformationDescModal;
