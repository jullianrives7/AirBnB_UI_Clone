import React from "react";
import Card from "react-bootstrap/Card";
import { MdChevronRight } from "react-icons/all";

export default function Things() {
  return (
    // <div>
    //   <div id="things-to-know">
    //     <div id="border">
    //       <h2 id="things-header">Things to know</h2>
    //     </div>
    //     <div id="house-rules-card">
    //       <Card border="light">
    //         <Card.Body>
    //           <Card.Title className="things-title">House Rules</Card.Title>
    //           <Card.Text id="check-in-1">Check-in 4:00PM - 7:00PM</Card.Text>
    //           <Card.Text id="check-out-1">Check-out before 10:00AM</Card.Text>
    //           <Card.Text id="guest">2 guest maximum</Card.Text>
    //           <div className="show">
    //             <Card.Link className="show-text" href="#">
    //               <u>Show more</u>
    //               <FaGreaterThan className="arrow-icon" fill="dark" />
    //             </Card.Link>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div id="two-card">
    //       <Card border="light">
    //         <Card.Body>
    //           <Card.Title className="things-title">
    //             Safety & property
    //           </Card.Title>
    //           <Card.Text id="dis">
    //             Pool/hot tub without a gate or lock{" "}
    //           </Card.Text>
    //           <Card.Text id="dis-two">
    //             Nearby lake, river, other body of water{" "}
    //           </Card.Text>
    //           <Card.Text id="gas">Carbon monoxide alarm</Card.Text>
    //           <div className="show">
    //             <Card.Link className="show-text" href="#">
    //               <u>Show more</u>
    //               <FaGreaterThan className="arrow-icon" fill="dark" />
    //             </Card.Link>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //     <div id="three-card">
    //       <Card border="light">
    //         <Card.Body>
    //           <Card.Title className="things-title">
    //             Cancellation policy
    //           </Card.Title>
    //           <Card.Text id="free">Free cancellation</Card.Text>
    //           <Card.Text id="policy">
    //             Review the host full cancellation policy which applies even if
    //             you cancel for illness or disruptions caused by COVID-19.
    //           </Card.Text>
    //           <div className="show">
    //             <Card.Link className="show-text" href="#">
    //               <u>Show more</u>
    //               <FaGreaterThan className="arrow-icon" fill="dark" />
    //             </Card.Link>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   </div>
    // </div>
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
