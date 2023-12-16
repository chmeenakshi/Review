import React, { useState } from "react";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Myntra = () => {
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

export default Myntra;
