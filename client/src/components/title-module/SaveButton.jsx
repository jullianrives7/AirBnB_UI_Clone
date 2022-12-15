import { AiOutlineHeart } from 'react-icons/all'
import Button from "react-bootstrap/Button"

const SaveButton = () => {
    return (
      <Button variant="light" className="title_module_SaveButton">
        <AiOutlineHeart /> <u>Save</u>
      </Button>  
    );
  };
  
  export default SaveButton;