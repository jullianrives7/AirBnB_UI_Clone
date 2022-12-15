import { FiShare } from "react-icons/all";
import Button from "react-bootstrap/Button"

const ShareButton = () => {
  return (
    <Button variant="light" className="title_module_ShareButton">
      <FiShare /> <u>Share</u>
    </Button>
  );
};

export default ShareButton;
