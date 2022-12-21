import { BsStarFill } from "react-icons/all";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { appContext } from "../../App";

const Reviews = () => {
  const { rentalData, reviewsData } = useContext(appContext);

  return (
    <>
      <div id="reviews-spring"></div>
      <div id="reviews-module">
        <div id="total-reviews">
          <BsStarFill style={{ height: "16px", width: "16px" }} />
          <a style={{ fontSize: "24px", fontFamily: "Circular-Md" }}>
            {rentalData.rating_avg} · {rentalData.review_count}
          </a>
        </div>
        <div id="reviews-bars">
          <div id="reviews-bar">
            <div style={{ marginLeft: "10px", marginRight: "190px" }}>
              <p> Cleanliness</p>
            </div>
            <ProgressBar
              style={{ width: "120px", height: "4px" }}
              variant="dark"
              now={95}
            />
            <p>4.8</p>
          </div>
          <div id="reviews-bar">
            <div style={{ marginLeft: "10px", marginRight: "155px" }}>
              <p> Communication</p>
            </div>
            <ProgressBar
              style={{ width: "120px", height: "4px" }}
              variant="dark"
              now={97}
            />
            <p>4.9</p>
          </div>
          <div id="reviews-bar">
            <div style={{ marginLeft: "10px", marginRight: "207px" }}>
              <p> Check-in</p>
            </div>
            <ProgressBar
              style={{ width: "120px", height: "4px" }}
              variant="dark"
              now={100}
            />
            <p>5.0</p>
          </div>
          <div id="reviews-bar">
            <div style={{ marginLeft: "10px", marginRight: "202px" }}>
              <p> Accuracy</p>
            </div>
            <ProgressBar
              style={{ width: "120px", height: "4px" }}
              variant="dark"
              now={97}
            />
            <p>4.9</p>
          </div>
          <div id="reviews-bar">
            <div style={{ marginLeft: "10px", marginRight: "209px" }}>
              <p> Location</p>
            </div>
            <ProgressBar
              style={{ width: "120px", height: "4px" }}
              variant="dark"
              now={97}
            />
            <p>4.9</p>
          </div>
          <div id="reviews-bar">
            <div style={{ marginLeft: "10px", marginRight: "230px" }}>
              <p> Value</p>
            </div>
            <ProgressBar
              style={{ width: "120px", height: "4px" }}
              variant="dark"
              now={95}
            />
            <p>4.8</p>
          </div>
        </div>
        <div id="reviews-box">
          <div id="reviews-comment">
            <div id="reviews-profile">
              <img
                style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                src={reviewsData[0].reviewer_img}
              ></img>
              <div>
                <h5>{reviewsData[0].reviewer_name}</h5>
                <p> {reviewsData[0].review_date}</p>
              </div>
            </div>
            <div>
              <a>{reviewsData[0].review_text}</a>
            </div>
          </div>
          <div id="reviews-comment1">
            <div id="reviews-profile">
              <img
                style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                src={reviewsData[1].reviewer_img}
              ></img>
              <div>
                <h5>{reviewsData[1].reviewer_name}</h5>
                <p>{reviewsData[1].review_date}</p>
              </div>
            </div>
            <div>
              <a>{reviewsData[1].review_text}</a>
              <div>
                <b>
                  <u>Show More </u>
                </b>
              </div>
            </div>
          </div>
          <div id="reviews-comment">
            <div id="reviews-profile">
              <img
                style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                src={reviewsData[2].reviewer_img}
              ></img>
              <div>
                <h4>{reviewsData[2].reviewer_name}</h4>
                <p>{reviewsData[2].review_date}</p>
              </div>
            </div>
            <div>
              <a>{reviewsData[2].review_text}</a>
            </div>
          </div>
          <div id="reviews-comment1">
            <div id="reviews-profile">
              <img
                style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                src={reviewsData[3].reviewer_img}
              ></img>
              <div>
                <h4>{reviewsData[3].reviewer_name}</h4>
                <p>{reviewsData[3].review_date}</p>
              </div>
            </div>
            <div>
              <a>{reviewsData[3].review_text}</a>
            </div>
          </div>
          <div id="reviews-comment">
            <div id="reviews-profile">
              <img
                style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                src={reviewsData[4].reviewer_img}
              ></img>
              <div>
                <h4>{reviewsData[4].reviewer_name}</h4>
                <p>{reviewsData[4].review_date}</p>
              </div>
            </div>
            <div>
              <a>{reviewsData[4].review_text}</a>
            </div>
          </div>
          <div id="reviews-comment1">
            <div id="reviews-profile">
              <img
                style={{ borderRadius: "50%", height: "40px", width: "40px" }}
                src={reviewsData[5].reviewer_img}
              ></img>
              <div>
                <h4>{reviewsData[5].reviewer_name}</h4>
                <p>{reviewsData[5].review_date}</p>
              </div>
            </div>
            <div>
              <a>{reviewsData[5].review_text}</a>
            </div>
          </div>
        </div>
        <div>
          <Button id="show-all-reviews" variant="light">
            Show all 425 reviews
          </Button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
