import CheckInCalendar from "./CheckInCalendar";
import CheckOutCalendar from "./CheckOutCalendar";
import Button from "react-bootstrap/esm/Button";
import { BsFillStarFill, BsDot } from "react-icons/all";
import { HiChevronDown } from "react-icons/hi2";
import { useContext } from "react";
import { appContext } from "../../App";

const ResCard = () => {
  const { rentalData } = useContext(appContext);
  return (
    <div id="reservation-card">
      <div id="top-half">
        <div id="res-top-text">
          <div id="left-top-text">
            <span id="top-dollar">${rentalData.cost_per_night}</span>
            <span id="night-text">night</span>
          </div>
          <div id="right-top-text">
            <BsFillStarFill />
            <span id="rating">{rentalData.rating_avg}</span>
            <BsDot />
            <span id="review-count">
              <u>{rentalData.review_count}</u>
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
        <div style={{ height: "50px" }}></div>
        <div id="lower-price-box">
          <div id="lpb-inner">
            <p>
              <b>Lower price.</b> Your dates are $32 less than the avg. nightly
              rate of the last 60 days.
            </p>
          </div>
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "32px",
              width: "32px",
              fill: "rgb(227, 28, 95)",
              stroke: "currentcolor",
              transform: "translate(81%,-50%)",
            }}
          >
            <g stroke="none">
              <path
                d="M24.556 8H9a1 1 0 0 0-.993.883L8 9v15.556a1 1 0 0 0 .206.608l.087.1 17.213 17.213a1 1 0 0 0 1.32.083l.094-.083L42.477 26.92a1 1 0 0 0 .083-1.32l-.083-.094L25.263 8.293a1 1 0 0 0-.575-.284L24.556 8z"
                fill-opacity=".2"
              ></path>
              <path d="M24.556 4A5 5 0 0 1 27.9 5.282l.192.182 17.213 17.214a5 5 0 0 1 .172 6.89l-.172.18L29.75 45.306a5 5 0 0 1-6.89.172l-.181-.172L5.464 28.092a5 5 0 0 1-1.457-3.271L4 24.556V9a5 5 0 0 1 4.783-4.995L9 4h15.556zm0 2H9a3 3 0 0 0-2.995 2.824L6 9v15.556a3 3 0 0 0 .743 1.977l.136.145L24.092 43.89a3 3 0 0 0 4.099.135l.144-.135L43.89 28.335a3 3 0 0 0 .135-4.1l-.135-.143L26.678 6.879a3 3 0 0 0-1.924-.872L24.556 6zM13 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </g>
          </svg>
        </div>
        <div id="report-listing">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "16px",
              width: "16px",
              fill: "#717171",
            }}
          >
            <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
          </svg>
          <span>
            <u>Report this listing</u>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
