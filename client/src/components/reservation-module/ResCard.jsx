import CheckInCalendar from "./CheckInCalendar";
import CheckOutCalendar from "./CheckOutCalendar";
import Button from "react-bootstrap/esm/Button";
import { BsFillStarFill, BsDot } from "react-icons/all";
import { HiChevronDown } from "react-icons/hi2";

const ResCard = () => {
  return (
    <div id="reservation-card">
      <div id="top-half">
        <div id="res-top-text">
          <div id="left-top-text">
            <span id="top-dollar">$363</span>
            <span id="night-text">night</span>
          </div>
          <div id="right-top-text">
            <BsFillStarFill />
            <span id="rating">{"4.90"}</span>
            <BsDot />
            <span id="review-count">
              <u>{"425 reviews"}</u>
            </span>
          </div>
        </div>
        <div style={{ height: "30px" }}></div>
        <div id="check-in-out-guest-container">
          <div id="check-in-out-row">
            <div id="check-in">
              <CheckInCalendar />
            </div>
            <div id="check-out">
              <CheckOutCalendar />
            </div>
          </div>
          <div id="guest-count-row">
            <span id="guests">GUESTS</span>
            <span id="guest-count">1 guest</span>
            <HiChevronDown
              style={{
                width: "20px",
                height: "20px",
                transform: "translate(900%,80%)",
              }}
            />
          </div>
        </div>
        <div style={{ height: "16px" }}></div>
        <Button variant="danger" style={{ width: "100%", height: "24%" }}>
          Reserve
        </Button>
        <div id="no-charge">You wont be charged yet</div>
        <div style={{ height: "10px" }}></div>
        <div id="format-space-between">
          <span id="price-x-nights">
            <u>$365 x 5 nights</u>
          </span>
          <span id="price">$1,814</span>
        </div>
        <div style={{ height: "16px" }}></div>
        <div id="format-space-between">
          <span id="price-x-nights">
            <u>Cleaning fee</u>
          </span>
          <span id="price">$85</span>
        </div>
        <div style={{ height: "16px" }}></div>
        <div id="format-space-between">
          <span id="price-x-nights">
            <u>Service fee</u>
          </span>
          <span id="price">$268</span>
        </div>
        <div style={{ height: "23px" }}></div>
        <div style={{ borderBottom: "1px solid #dddddd" }}></div>
        <div style={{ height: "16px" }}></div>
        <div id="format-space-between">
          <span id="price-x-nights" style={{ fontWeight: "600" }}>
            Total before taxes
          </span>
          <span id="price" style={{ fontWeight: "600" }}>
            $2,167
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
