import { FiShare } from "react-icons/all";
import Button from "react-bootstrap/Button";

const ShareButton = () => {
  return (
    // <Button variant="light" className="title_module_ShareButton">
    //   <FiShare /> <u>Share</u>
    // </Button>
    <div id="share-button">
      <FiShare style={{ width: "17px", height: "17px" }} />
      {
        <b>
          <u>Share</u>
        </b>
      }
    </div>
  );
};

export default ShareButton;
