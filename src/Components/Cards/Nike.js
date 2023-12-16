import React, { useState } from "react";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Nike = () => {
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
                <NavLink to={"/Review"}>
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

export default Nike;
