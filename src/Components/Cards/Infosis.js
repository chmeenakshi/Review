import React, { useState } from "react";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Infosis = () => {
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

export default Infosis;
