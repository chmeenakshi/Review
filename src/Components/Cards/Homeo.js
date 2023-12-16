import React, { useState } from "react";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Homeo = () => {
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
                  src="data:image/jpeg;base64,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"
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

export default Homeo;
