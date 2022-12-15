import TitleStars from "./TitleStars";
import TitleReviews from "./TitleReviews";
import TitleLocation from "./TitleLocation";
import ShareButton from "./ShareButton";
import SaveButton from "./SaveButton";
import Modal from "react-bootstrap/Modal";
import React, { useContext } from "react";
import { appContext } from "../../App";

const Title = () => {
  const { ApiUrl,setRentalData,rentalData } = useContext(appContext);


  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div className="titleContainerTitle">
            <h2>{rentalData.title}</h2>
          </div>
          <div className="titleContainerRows">
            <TitleStars />
            <TitleReviews />
            <TitleLocation />
            <div className="titleContainerButtons">
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
