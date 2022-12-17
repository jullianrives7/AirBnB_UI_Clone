import React from "react";
import Card from "react-bootstrap/Card";
import { FaGreaterThan } from "react-icons/all";

export default function Things() {
  return (
    <div>
      <div id="things-to-know">
        <div id="border">
          <h2 id="things-header">Things to know</h2>
        </div>
        <div id="house-rules-card">
          <Card border="light">
            <Card.Body>
              <Card.Title className="things-title">House Rules</Card.Title>
              <Card.Text id="check-in">Check-in 4:00PM - 7:00PM</Card.Text>
              <Card.Text id="check-out">Check-out before 10:00AM</Card.Text>
              <Card.Text id="guest">2 guest maximum</Card.Text>
              <div className="show">
                <Card.Link className="show-text" href="#">
                  Show more
                  <FaGreaterThan className="arrow-icon" fill="dark" />
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div id="two-card">
          <Card border="light">
            <Card.Body>
              <Card.Title className="things-title">
                Safety & property
              </Card.Title>
              <Card.Text id="dis">
                Pool/hot tub without a gate or lock{" "}
              </Card.Text>
              <Card.Text id="dis-two">
                Nearby lake, river, other body of water{" "}
              </Card.Text>
              <Card.Text id="gas">Carbon monoxide alarm</Card.Text>
              <div className="show">
                <Card.Link className="show-text" href="#">
                  Show more
                  <FaGreaterThan className="arrow-icon" fill="dark" />
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div id="three-card">
          <Card border="light">
            <Card.Body>
              <Card.Title className="things-title">
                Cancellation policy
              </Card.Title>
              <Card.Text id="free">Free cancellation</Card.Text>
              <Card.Text id="policy">
                Review the Host full cancellation policy which applies even if
                you cancel for illness or disruptions caused by COVID-19.
              </Card.Text>
              <div className="show">
                <Card.Link className="show-text" href="#">
                  Show more
                  <FaGreaterThan className="arrow-icon" fill="dark" />
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div id="sep"></div>
    </div>
  );
}
