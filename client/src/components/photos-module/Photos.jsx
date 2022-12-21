import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { TbGridDots } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";

const Photos = () => {
  const { setShowPhotoModal, photosData } = useContext(appContext);

  return (
    <div id="photos-wrapper">
      <Image
        id="big-photo"
        style={{ width: "550px", height: "497px" }}
        src={
          "https://a0.muscache.com/im/pictures/2adf6ef9-e131-431b-a34e-9566e768f509.jpg?im_w=1200"
        }
        onClick={() => {
          setShowPhotoModal(true);
          console.log(rentalData.photo[0]);
        }}
      />
      <div id="photo-column">
        <Image
          id="small-photo-1"
          style={{ width: "272px", height: "230px" }}
          src="https://a0.muscache.com/im/pictures/4316b6ec-2afd-4d03-bc3e-8b2887304fc3.jpg?im_w=1440"
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-2"
          style={{ width: "272px", height: "260px" }}
          src="https://a0.muscache.com/im/pictures/e690cc94-d29f-4dc7-9c8f-6ee7e9c26fe9.jpg?im_w=1440"
          onClick={() => setShowPhotoModal(true)}
        />
      </div>
      <div id="photo-column">
        <Image
          id="small-photo-3"
          style={{ width: "272px", height: "230px" }}
          src="https://a0.muscache.com/im/pictures/11bf0999-efa2-4657-ba09-72e94441d539.jpg?im_w=1440"
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-4"
          style={{ width: "272px", height: "260px" }}
          src="https://a0.muscache.com/im/pictures/be0e95ec-ad5b-4753-9877-7d29855c6beb.jpg?im_w=1440"
          onClick={() => setShowPhotoModal(true)}
        />
        <Button
          id="show-all-photos-btn"
          variant="light"
          onClick={() => setShowPhotoModal(true)}
        >
          <TbGridDots
            style={{
              width: "18px",
              height: "18px",
            }}
          />{" "}
          Show all photos
        </Button>
      </div>
    </div>
  );
};

export default Photos;
