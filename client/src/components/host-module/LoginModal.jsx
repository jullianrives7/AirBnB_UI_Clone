import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { RxCross2 } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";
import { BsFacebook } from "react-icons/all";
import { FcGoogle } from "react-icons/all";
import { SiApple } from "react-icons/all";
import { CiMail } from "react-icons/all";
function LoginModal() {
  const { showLogInModal, setShowLogInModal } = useContext(appContext);
  const handleClose = () => {
    setShowLogInModal(false);
  };
  const handleClick = () => {
    window.location.assign("https://www.airbnb.com/help/article/2855");
  };

  return (
    <>
      <Modal show={showLogInModal} onHide={handleClose}>
        <Modal.Header>
          <div id="cross-left-wrapper">
            <RxCross2
              id="cross-left"
              style={{ marginTop: "10px" }}
              onClick={handleClose}
            />
          </div>
          <Modal.Title id="login-title">Log in or sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h3>Welcome to Airbnb</h3>
              <Dropdown id="login-dropdown1">
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  United State (+1)
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
            <p>
              {" "}
              We'll call or text you to confirm your number. Standard message
              and data rates apply.
              <b>
                <u id="privacy" onClick={handleClick}>
                  {" "}
                  Privacy Policy
                </u>
              </b>
            </p>
            <div id="login-btn" className="d-grid gap-2">
              <Button variant="danger" size="lg">
                Countinue
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer id="login-footer">
          <div className="d-grid gap-2">
            <Button id="login-btn1" variant="light">
              <img
                style={{
                  marginTop: "3px",
                  marginRight: "110px",
                  borderRadius: "50%",
                  height: "20px",
                  width: "35px",
                }}
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              ></img>
              Continue with Facebook
            </Button>
            <Button id="login-btn1" variant="light">
              <FcGoogle id="login-logo" />
              Continue with Google
            </Button>
            <Button id="login-btn1" variant="light">
              <SiApple id="login-logo" />
              Continue with Apple
            </Button>
            <Button id="login-btn1" variant="light">
              <CiMail id="login-logo" />
              Continue with email
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
