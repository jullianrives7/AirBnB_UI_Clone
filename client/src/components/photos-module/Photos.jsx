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
        src={photosData[0].photo_url}
        onClick={() => {
          setShowPhotoModal(true);
        }}
      />
      <div id="photo-column">
        <Image
          id="small-photo-1"
          style={{ width: "272px", height: "230px" }}
          src={photosData[1].photo_url}
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-2"
          style={{ width: "272px", height: "260px" }}
          src={photosData[2].photo_url}
          onClick={() => setShowPhotoModal(true)}
        />
      </div>
      <div id="photo-column">
        <Image
          id="small-photo-3"
          style={{ width: "272px", height: "230px" }}
          src={photosData[3].photo_url}
          onClick={() => setShowPhotoModal(true)}
        />
        <Image
          id="small-photo-4"
          style={{ width: "272px", height: "260px" }}
          src={photosData[4].photo_url}
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
          />
          Show all photos
        </Button>
      </div>
    </div>
  );
};

export default Photos;
