import React, { useState } from "react";
import "./index.css";
//import { IoStarSharp } from "react-icons/io5";
//import { FaHeart } from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Fate = () => {
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
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhMIBxMWExUXGB0WFRgYGR0eHhsaGR0cKyAaGx8gHSggHx0xHBsiJTEiJyotMi4uHB82ODMwNygtLisBCgoKDg0OGhAQGCsdHx8rLS0rLS4rLS0tKystLSsrLS0tLS0tLS0tLSstLSstLS0rLSsrLS0tLTc3Kzc3KystK//AABEIAK4BIgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAf/EAEMQAAEDAwMBBgMFBAQPAAAAAAEAAgMEBREGEiExBxMiQVFhFDJxFUJSgaEWI5HBQ2KCkiQlJzM0NmNyc5OisbKz4f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREBAQEAAwAAAAAAAAAAAAAAAAERITFB/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERZvrLV1ZVam/ZTRbR3wGZpTg7cgHAzkAAEZcQfmAAyg0hFkM1/vGg6mOo1a5lVTPdtc5mCW/QhjDuwCQCCDgjIK1uGQTRCWI5BAIPqD0KuD7REUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUNbtM09uv897pg4SzgCQlxI4x0HlnAz9FMOcGjc7gKAuWtbfbtzJ6uDeATsEjS7jywCSgp/bHcjc+50dah3lRM9rnAfcaMlufTJ8Xs1pPmFo9spfgbdFRg57tjWZ9doAz+ix7slvVIy4VV91JURR1U0mB3jwMNOC7aXdASQ32EYC2WmqWVUQlpXte09C0gj+IVo9URFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVL1z2gxaaeKCib8RVO4bE3J2k9N+MnJ8mjk+3VffaZq/8AZezhlF4qmbLIW4zjpl+PPGRgebi0dMrm7ONDiww/a13/AHlZL4nuccmPd1aD+L8TvM8dFRAQ6IuWsv8ACta1ToYzyKePHA46t+Rv57z7hWSg7LLZRsw6AyH1kkef0BDf4BXVV3XephpawOrWt3yuIjhZ13SO6cDkgYJIHXGOpTaOOp7NLXUM2mlDfdj3tP6OVaruymS1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G10M5aMmMOzh+PTxH+7jqQurU/aLQtsUkdqmbUzStMcUUeXOLnggbgBkD1zz5DnhXCSuhNH373sMZ8Ocggnpt+ueMLnttppIH/GW2CFhd99kbQT+YGUGbamtDtP9g/2fXDxtDHPGehfMHFufbdhSzNC1t5oWU+oLrJLTENLoWQsjJAwQ0vHOPyP8VoNVTMq4TBVsa9p6tcAQceoPC9GjaNreAmj4p4G00DYIBta0BrQPIAcD+C9ERQEREBERAREQEREBERAREQEREBERAREQFwikfGKh0LgHSO3MJHynu2NGfXluV3IghILB3NDPQCVzo5Y9niDdzTs2k8AA+EN4I6tPXK9HW6WogqGVLwO9j7sAFxaDhwLwHHjOR4R6dTlS6II+WmkqqLuajY07mEbckYY5p8wOeFy3KyGsmfPE/Y920A4z4R8zHeoPl6EA+oM0iCJntj3X37QjPGxjcd5I35HSEna07XcP+8PJdFxo3TyMmpyNzdwwSQCHjBwRy13Aw4Z8x55HciCL+z5G08JDw+SIl2X5w7cHDGclwwHYDuTxz1K8p7Q6S3dxuG4y967BcwZLiSGlp3N69Qeec9SplEEVVW509BHDxuYcg95JkcEZEgO/ODznORkHqvaqoXVVqFHM8l2Gbn/KSWlpJG0gtJx5HjK70QQr7Jtop6aFzv3j2vBc95I2hnBeXF/3OoPGeF6vtjprY2ke4tIka/Ie95w14djc87s8Y9lKoghZLM42xtKH5cJO83bntLuSclzTuDsHkjjjgAcCUo4zDTNjk6gY+Zzv+p3iP1K9kQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q=="
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

export default Fate;
