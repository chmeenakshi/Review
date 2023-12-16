import React, { useState } from "react";
import "./index.css";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Index = () => {
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

export default Index;
