import React, { useState } from "react";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Tcs = () => {
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
                      <span className="MEENA"></span>Review Guru
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

export default Tcs;
