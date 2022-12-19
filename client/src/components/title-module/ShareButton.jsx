import { FiShare } from "react-icons/all";
import Button from "react-bootstrap/Button";

const ShareButton = () => {
  return (
    <div id="share-button">
      <FiShare style={{ width: "17px", height: "17px" }} />
      <span style={{ fontFamily: "Circular-Bold" }}>
        <u>{"Share"}</u>
      </span>
    </div>
  );
};

export default ShareButton;
