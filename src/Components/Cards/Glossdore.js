import React, { useState } from "react";
import "./index.css";
//import { IoStarSharp } from "react-icons/io5";
//import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Glossdore = () => {
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

export default Glossdore;
