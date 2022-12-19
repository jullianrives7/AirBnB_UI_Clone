import Modal from "react-bootstrap/Modal";
import InformationSummary from "./information-summary/InformationSummary";
import InformationConsideration from "./information-consideration/InformationConsideration";
import InformationAirCover from "./information-aircover/InformationAirCover";
import InformationDesc from "./information-description/InformationDesc";
import InformationAbout from "./information-about/InformationAbout";
import InformationAmenities from "./information-ammenities/InformationAmenities";
import React, { useContext } from "react";
import { appContext } from "../../App";
import InfoCalendarSubModule from "./information-calendar/InfoCalendarSubModule";

const InformationModule = () => {
  const { setAirCoverModal, ApiUrl, setRentalData, rentalData } =
    useContext(appContext);

  console.log(rentalData);
  return (
    <div id="information-module-container">
      <Modal.Dialog>
        <Modal.Body>
          <div className="informationContainerSummary">
            <InformationSummary />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerDesc">
            <InformationConsideration />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerDesc">
            <InformationAirCover />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerDesc">
            <InformationDesc />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerAbout">
            <InformationAbout />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerAmen">
            <InformationAmenities />
          </div>
        </Modal.Body>
        <Modal.Body>
          <div className="informationContainerCalendar">
            <InfoCalendarSubModule />
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationModule;
