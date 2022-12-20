import React from "react";
import { MdChevronRight } from "react-icons/all";

export default function Things() {
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
          <span>Check-in: 4:00 PM - 7:00 PM</span>
          <span>Checkout before 11:00 AM</span>
          <span>2 guests maximum</span>
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
