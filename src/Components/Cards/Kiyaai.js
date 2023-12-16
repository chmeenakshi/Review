import React, { useState } from "react";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Kiyaai = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      <Container>
        <Row>
          <Col lg="12">
            <div className="heading1">
              <div className="meenaSec">
                <img
                  src="data:image/png;base64,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"
                  className="img"
                />
                <span>
                <NavLink to={"/review"}>
                  <button className="btn btn-primary">
                    <i class="fa-solid fa-pen-to-square"></i> write a review
                  </button>
                  </NavLink>
                </span>
              </div>
              <div className="cardSection2">
                <div className="text">
                  <div className="reviewHeading">
                    <h3>
                      <span className="MEENA"></span>MouthShut Score
                    </h3>
                  </div>
                  <div className="heading2">
                    <h5>193 Followers</h5>
                    <select>
                      <option>Year-Wise Rating</option>
                    </select>
                  </div>
                </div>
                <div className="reviewStar">
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                          className="star"
                          size={30}
                          color={
                            currentRating <= (hover || rating)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                  <div className="user-data d-flex justify-content-around align-item-center">
                    <span>3.8 ★</span>
                  </div>
                  <div className="user d-flex justify-content-between align-item-center">
                    <span>100%❤</span>
                  </div>
                  <div className="data d-flex justify-content-between align-item-center">
                    <span>145 Votes</span>
                  </div>
                </div>
                <div className="container">
                  <div className="container d-flex flex-row m-3">
                    <h3 >plot</h3>
                    <div className="progress ml-3">
                      <div className="progress-bar d-flex progress-bar-striped "></div>
                    </div>
                  </div>
                  <div className="container d-flex flex-row m-3">
                    <h3 >performance</h3>
                    <div className="progress ml-3">
                      <div className="progress-bar d-flex progress-bar-striped "></div>
                    </div>
                  </div>
                </div>
                <div className="button-owe d-flex  m-5 justify-content-between align-item-center">
                <button>owener ? claim this business</button>
              </div>
              </div>

              
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Kiyaai;
