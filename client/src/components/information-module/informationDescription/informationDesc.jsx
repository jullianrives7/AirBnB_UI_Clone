import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IoIosArrowForward } from 'react-icons/all'

const InformationDesc = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Body>
          <div>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum v
              Lorem Ipsum Lorem Ipsum Lorem Ipsum v Lorem Ipsum Lorem Ipsum
            </p>
          </div>
          <Button variant="light" className="title_module_ShareButton">
            <h2><u>show more <IoIosArrowForward/></u></h2>
          </Button>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default InformationDesc;
