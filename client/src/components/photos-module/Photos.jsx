import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { TbGridDots } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";

const Photos = () => {
  const { setShowPhotoModal } = useContext(appContext);

  return (
    <div id="photos-wrapper">
      <Image
        id="big-photo"
        style={{ width: "547px", height: "547px" }}
        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-704260259133454902/original/e3866f6e-5013-4ac0-89e8-9ab635c8fc98.jpeg?im_w=1200"
        onClick={() => setShowPhotoModal(true)}
      />
      <div id="photo-column">
        <Image
          id="small-photo-1"
          style={{ width: "270px", height: "270px" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/193cc9b1-06b9-4ccc-a673-a45f31eb5957.jpeg?im_w=720"
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-2"
          style={{ width: "270px", height: "270px" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/55633874-0610-4215-82f0-4e4590e2d02a.jpeg?im_w=720"
          onClick={() => setShowPhotoModal(true)}
        />
      </div>
      <div id="photo-column">
        <Image
          id="small-photo-3"
          style={{ width: "270px", height: "270px" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/a720f8e1-0b76-44b8-ad7a-b8f7067bf1a2.jpeg?im_w=720"
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-4"
          style={{ width: "270px", height: "270px" }}
          src="https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/a720f8e1-0b76-44b8-ad7a-b8f7067bf1a2.jpeg?im_w=720"
          onClick={() => setShowPhotoModal(true)}
        />
        <Button
          id="show-all-photos-btn"
          variant="outline-light"
          onClick={() => setShowPhotoModal(true)}
        >
          <TbGridDots style={{ width: "18px", height: "18px" }} /> Show all
          photos
        </Button>
      </div>
    </div>
  );
};

export default Photos;
