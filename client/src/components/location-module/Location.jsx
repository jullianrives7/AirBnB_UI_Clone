import { MdChevronRight } from "react-icons/all";

const Location = () => {
  return (
    <div id="location-module-container">
      <span style={{ fontSize: "22px", fontFamily: "Circular-Md" }}>
        Where you'll be
      </span>
      <img src="./location-map.png" style={{ cursor: "grab" }}></img>
      <h6>Lumberton, Texas, United States</h6>
      <span style={{ fontSize: "16px" }}>
        Naturalist Boudoir is nestled in the woods, along the water, across from
        Big Thicket Island located at Rock'N Dollar Ranch and is surrounded by
        100's of acres of nature.
      </span>
      <h6 style={{ marginTop: "5px" }}>
        <u>Show more</u>
        <MdChevronRight style={{ width: "21px", height: "21px" }} />
      </h6>
    </div>
  );
};

export default Location;
