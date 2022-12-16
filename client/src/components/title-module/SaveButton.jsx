import { AiOutlineHeart } from "react-icons/all";
import Button from "react-bootstrap/Button";

const SaveButton = () => {
  return (
    <div id="save-button">
      <AiOutlineHeart style={{ width: "18px", height: "18px" }} />
      <b>
        <u>Save</u>
      </b>
    </div>
  );
};

export default SaveButton;
