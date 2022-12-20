import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../../App";

const InformationDesc = () => {
  const { ShowInformationDescModal, setShowInformationDescModal } =
    useContext(appContext);
  const handleClick = () => {
    setShowInformationDescModal(true);
  };

  return (
    <div>
      <div>
        <p style={{ fontSize: "16px", lineHeight: "24px" }}>
          Nestled in the heart of the Big Thicket, our Naturalist Boudoir B&B
          has everything you need to revitalize your senses. Extremely private
          area for the naturalist with outdoor hot tub and shower. We welcome
          all guests to experience our lovely Naturalist Boudoir & reconnect
          with your special someone. Should your dates not be available for this
          cabin, please check out our additional cabins...Naturalist Boudoir
          TOO, Naturalist Boudoir on Point & Naturalist Boudoir RITZ. Check my
          profile for all.
        </p>
      </div>
      <div className="informationShowMoreButton" onClick={handleClick}>
        <span className="showMoreSpan">
          <b>
            <u>Show more</u>
          </b>
        </span>
      </div>
    </div>
  );
};

export default InformationDesc;
