import React from "react";
import { MdChevronRight } from "react-icons/all";
import { useContext } from "react";
import { appContext } from "../../App";

export default function Things() {
  const { rentalData } = useContext(appContext);
  return (
    <div id="things-to-know-container">
      <span
        style={{
          fontFamily: "Circular-Md",
          fontSize: "24px",
        }}
      >
        Things to know
      </span>
      <div id="things-flex-row">
        <div id="things-flex-column">
          <h6>House Rules</h6>
          <span>Check-in: {rentalData.check_in_time}</span>
          <span>Checkout before {rentalData.check_out_time}</span>
          <span>{rentalData.max_guests} maximum</span>
          <h6 style={{ marginTop: "5px" }}>
            <u>Show more</u>
            <MdChevronRight style={{ width: "21px", height: "21px" }} />
          </h6>
        </div>
        <div id="things-flex-column">
          <h6>Safety & property</h6>
          <span>Pool/hot tup without a gate or lock</span>
          <span>Nearby lake, river, other body of water</span>
          <span>Carbon monoxide alarm</span>
          <h6>
            <u>Show more</u>
            <MdChevronRight style={{ width: "21px", height: "21px" }} />
          </h6>
        </div>
        <div id="things-flex-column">
          <h6>Cancellation policy</h6>
          <span>Free cancellation for 48 hours.</span>
          <span style={{ lineHeight: "20px" }}>
            Review the Host’s full cancellation policy which applies even if you
            cancel for illness or disruptions caused by COVID-19.
          </span>
          <h6>
            <u>Show more</u>{" "}
            <MdChevronRight style={{ width: "21px", height: "21px" }} />
          </h6>
        </div>
      </div>
    </div>
  );
}
