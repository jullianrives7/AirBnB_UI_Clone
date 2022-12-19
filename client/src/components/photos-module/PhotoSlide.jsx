import Modal from "react-bootstrap/Modal";
import ShareButton from "../title-module/ShareButton";
import SaveButton from "../title-module/SaveButton";
import { FaChevronLeft } from "react-icons/all";
import { RxCross1 } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";
import Carousel from "react-bootstrap/Carousel";

function PhotoSlide() {
  const { photoSlide, setPhotoSlide } = useContext(appContext);
  const handleHide = () => {
    setPhotoSlide(false);
  };

  return (
    <Modal
      id="slide-bg"
      show={photoSlide}
      fullscreen={true}
      onHide={handleHide}
      style={{ backgroundColor: "black" }}
    >
      <Modal.Body style={{ backgroundColor: "black" }}>
        <div id="photo-slide">
          <div id="arrow-left-wrapper">
            <RxCross1
              id="arrow-left"
              style={{ marginTop: "10px", fill: "white" }}
              onClick={handleHide}
            />
          </div>
          <div id="photo-modal-buttons" style={{ float: "right" }}>
            <ShareButton style={{ color: "white" }} />
            <SaveButton />
          </div>
        </div>
        <div id="main-slide">
          <Carousel id="slide" fade>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/2adf6ef9-e131-431b-a34e-9566e768f509.jpg?im_w=1200"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/4316b6ec-2afd-4d03-bc3e-8b2887304fc3.jpg?im_w=1440"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "700px",
                  marginLeft: "800px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/e690cc94-d29f-4dc7-9c8f-6ee7e9c26fe9.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/11bf0999-efa2-4657-ba09-72e94441d539.jpg?im_w=1440"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/be0e95ec-ad5b-4753-9877-7d29855c6beb.jpg?im_w=1440"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/5ec8afa0-6b5c-46df-9f8f-079e3122bb4a.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/025e3b37-c035-4ad9-9627-fda9e93cbe74.jpg?im_w=1440"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/b293281d-72a7-40b6-8daf-40abbd7ae90c.jpg?im_w=1440"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/096ac536-6b4a-4eb0-8117-10aee152f025.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "700px",
                  marginLeft: "800px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/2adc38b6-fc71-4737-9295-ca292ff2aeef.jpg?im_w=1440"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/dec3bbdc-6345-4d15-8ee5-fb6e1efa5d9c.jpg?im_w=1440"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/95d08be5-6c1d-451c-a446-7849c3de4a7a.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/f40cfc5e-f2bf-4a8e-86b6-6b6a803f47cc.jpg?im_w=1440"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/dc404cb9-54ed-4202-9a9d-e87adb1e9534.jpg?im_w=1440"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/69baa7d5-9bbd-4026-a554-a81d88cda3a3.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/7c4fdbdb-f324-48c0-862b-e2155291bd7e.jpg?im_w=1440"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/0c638528-cb9d-427b-8d19-04affbd80d68.jpg?im_w=1440"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/08429a04-7fd6-437f-8704-8a4664d76953.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/05ec1f25-cff1-4dd9-99bb-0b68a7aca89f.jpg?im_w=1440"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/24b1495f-d3ea-47b3-9c81-0c2d452403ea.jpg?im_w=1440"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "1000px",
                  width: "1600px",
                  marginLeft: "400px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/f0490604-5940-4206-9589-a502b62c82b1.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{
                  height: "auto",
                  width: "auto",
                  marginLeft: "400px",
                  marginTop: "300px",
                }}
                className="d-block"
                src="https://a0.muscache.com/im/pictures/b7942598-ac51-476e-840b-b66df4c09b1b.jpg?im_w=1440"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PhotoSlide;
