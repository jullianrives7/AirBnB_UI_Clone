import { FiShare } from "react-icons/all";
import Button from "react-bootstrap/Button";

const ShareButton = () => {
  return (
    <div id="share-button">
      <FiShare style={{ width: "17px", height: "17px" }} />
      <b>
        <u>Share</u>
      </b>
    </div>
  );
};

export default ShareButton;
