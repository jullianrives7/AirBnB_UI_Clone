import TitleStars from "./TitleStars";
import TitleReviews from "./TitleReviews";
import TitleLocation from "./TitleLocation";
import ShareButton from "./ShareButton";
import SaveButton from "./SaveButton";
import Modal from "react-bootstrap/Modal";
import React, { useContext } from "react";
import { appContext } from "../../App";

const Title = () => {
  const { rentalData } = useContext(appContext);

  return (
    <div id="title-module-container">
      <Modal.Dialog>
        <Modal.Body>
          <div id="title-title">{rentalData.title}</div>
          <div id="row-formatter">
            <div id="title-details">
              <TitleStars />
              <TitleReviews />
              <TitleLocation />
            </div>
            <div id="title-buttons">
              <ShareButton />
              <SaveButton />
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Title;
