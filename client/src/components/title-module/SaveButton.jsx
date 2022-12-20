import { AiOutlineHeart } from "react-icons/all";
import Button from "react-bootstrap/Button";

const SaveButton = () => {
  return (
    <div id="save-button">
      <AiOutlineHeart style={{ width: "18px", height: "18px" }} />
      <span style={{ fontFamily: "Circular-Bold" }}>
        <u>{"Save"}</u>
      </span>
    </div>
  );
};

export default SaveButton;
