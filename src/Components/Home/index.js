import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

import "./index.css";
import { Col, Container, Row } from "reactstrap";
//import { Col, Container, Row } from "reactstrap";

const Home = () => {
  const navigate = useNavigate();
  const [typeText, setTypeText] = useState("");

  const FeatureLink = ({ imageGray, imageGreen, title, description, link }) => (
    <div className="club10">
      <a className="hoveritem alagitem" href={link}>
        <img className="grey" src={imageGray} alt="" width="21" />
        <img className="green" src={imageGreen} alt="" width="21" />

        <div className="small-wrapper">
          <div className="versin">{title}</div>
          <div className="versin1">{description}</div>
        </div>
      </a>
    </div>
  );

  return (
   
    <div className="container-fluid ">
      <div className="  heading-container">
        <h1 className="heading ">Welocome to the Review by Guru..</h1>
        <h2 className="SubHeading">
          Review Guru user...
          <span className="span">Trusted by Millions users...</span>
        </h2>
      </div>
      
      <div className="container-card2">
       <h1>Business</h1>
    </div>
      <div className="card-container">
        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.omgs.in/">
            <img
              className="image-object-fit-contain"
              src="https://omgs.in/wp-content/uploads/2021/07/OMGS-1200x627-1.png"
              alt="Review Image"
            />
          </a>
          <div className="recent-rev-text">
            {/* User Details */}
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">M</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://m.mouthshut.com/arcotjagadishwari"
                  rel="nofollow"
                >
                  <span className="align-middle ng-binding">Meena</span>
                </a>
                <span className="align-middle">reviewed by</span>
                <div className="time-text ng-binding">3hrs ago</div>
              </div>
            </div>
            {/* Star Rating */}
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* Review Content */}
            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.omgs.in/"
              >
                OMGS.co.in
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  MouthShut Verified Product
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              {/* Review content */}
              Good Quality
            </div>
            {/* Read Complete Review Link */}
            <div className="recent-rev-divider"></div>
            <NavLink to={"/omgs"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.kiya.ai/">
            <img
              className="image-object-fit-contain"
              src="data:image/png;base64,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"
              alt="Review Thumbnail"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">K</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://www.kiya.ai/"
                  rel="nofollow"
                >
                  <span className="align-middle ng-binding"> kiran</span>
                </a>
                <span className="align-middle">reviewed</span>

                <div className="time-text ng-binding">0hrs26mins ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.kiya.ai/"
              >
                kiya.ai
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  MouthShut Verified Product
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              Like team spirit & the work
              {/* ... */}
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/kiyaai"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.homeolife.in/">
            <img
              className="image-object-fit-contain"
              src="data:image/jpeg;base64,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"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">p</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://www.homeolife.in/"
                  rel="nofollow"
                >
                  <span className="align-middle ng-binding">panvith</span>
                </a>
                <span className="align-middle">reviewed by</span>
                <div className="time-text ng-binding">0hrs26mins ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.homeolife.in/"
              >
                DR.Kirans.com
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  MouthShut Verified Product
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              A positive exppernince or Dr.Kirans
            </div>
            <div className="recent-rev-divider">
              <NavLink to={"/Homeo"}>
                <button type="button">
                  View Reviews...
                  <FaArrowRightToBracket />
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="hhttps://www.glassdoor.co.in/Reviews/index.htm">
            <img
              className="image-object-fit-contain"
              src="data:image/png;base64,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"
              alt="Review Thumbnail"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">G</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://www.glassdoor.co.in/Reviews/index.htm"
                  rel="nofollow"
                >
                  <span className=" ng-binding">glassdoor</span>
                </a>
                <span className="align-middle">reviewed by</span>
                <div className="time-text ng-binding">4day-ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.glassdoor.co.in/Reviews/index.htm"
              >
                Glossdore.co
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  MouthShut Verified Product
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              Qulity of shoow is good
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/nike"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container-card2">
       <h1>compaines</h1>
    </div>
      <div className="card-container">
       
        <div className="recent-rev-content box-border">
       
          <a className="recent-rev-img" href="https://www.tcs.com/">
            <img
              className="image-object-fit-contain"
              src="data:image/png;base64,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"
              alt="Review Image"
            />
          </a>
          <div className="recent-rev-text">
            {/* User Details */}
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">T</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://www.tcs.com/"
                  rel="nofollow"
                >
                  <span className="align-middle ng-binding">Tcs</span>
                </a>
                <span className="align-middle">reviewed by</span>
                <div className="time-text ng-binding">2hrs ago</div>
              </div>
            </div>
            {/* Star Rating */}
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* Review Content */}
            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.tcs.com/"
              >
                tcs.co.in
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  very good company
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              {/* Review content */}
              Good company
            </div>
            {/* Read Complete Review Link */}
            <div className="recent-rev-divider"></div>
            <Link to={"/tcs"}>
              <button type="button " onClick={() => navigate("/ReviewDetails")}>
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </Link>
           
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.wipro.com/">
            <img
              className="image-object-fit-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbv-PhbnffnxWERgJdRifpBLzQIX6awbRtww&usqp=CAU"
              alt="Review Thumbnail"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">W</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://www.wipro.com/"
                  rel="nofollow"
                >
                  <span className="align-middle ng-binding"> wipro</span>
                </a>
                <span className="align-middle">reviewed</span>

                <div className="time-text ng-binding">0hrs26mins ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.wipro.com/"
              >
                wipro.com
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  MouthShut Verified Product
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              Like team spirit & the work
              {/* ... */}
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/Wipro"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.hcltech.com/">
            <img
              className="image-object-fit-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjaPcDve2ql3CliSP_IrxBs0oWyL4Tc_rjQ&usqp=CAU"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">H</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://www.hcltech.com/"
                  rel="nofollow"
                >
                  <span className="align-middle ng-binding">hcltech</span>
                </a>
                <span className="align-middle">reviewed by</span>
                <div className="time-text ng-binding">0hrs26mins ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.hcltech.com/"
              >
                hcltech.com
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  MouthShut Verified Product
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              A positive exppernince 
            </div>
            <div className="recent-rev-divider">
              <NavLink to={"/Hcl"}>
                <button type="button">
                  View Reviews...
                  <FaArrowRightToBracket />
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.infosys.com/">
            <img
              className="image-object-fit-contain"
              src="data:image/png;base64,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"
              alt="Review Thumbnail"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">I</div>
              </div>
              <div className="user-name">
                <a
                  className="text-break align-middle mr-1"
                  href="https://www.infosys.com/"
                  rel="nofollow"
                >
                  <span className=" ng-binding">infosys</span>
                </a>
                <span className="align-middle">reviewed by</span>
                <div className="time-text ng-binding">4day-ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <div className="d-flex align-items-center">
              <a
                className="review-title text-truncate ng-binding"
                href="https://www.infosys.com/"
              >
                infosys.com
              </a>
              <span className="verified-corp-icon tooltip1 right listviewverify ng-hide">
                <span className="tooltip-content" style={{ display: "none" }}>
                  MouthShut Verified Product
                </span>
              </span>
            </div>
            <div className="user-review-content text-truncate ng-binding">
              Qulity  good company
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/infosis"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>
      </div>


      
    
    <div className="container-card2">
       <h1>shopping</h1>
    </div>
      <div className="product-container">
        <div className="recent-rev-content box-border">
          <a
            className="recent-rev-img"
            href="https://en.wikipedia.org/wiki/Postern_of_Fate"
          >
            <img
              className="image-object-fit-contain"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhMIBxMWExUXGB0WFRgYGR0eHhsaGR0cKyAaGx8gHSggHx0xHBsiJTEiJyotMi4uHB82ODMwNygtLisBCgoKDg0OGhAQGCsdHx8rLS0rLS4rLS0tKystLSsrLS0tLS0tLS0tLSstLSstLS0rLSsrLS0tLTc3Kzc3KystK//AABEIAK4BIgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAf/EAEMQAAEDAwMBBgMFBAQPAAAAAAEAAgMEBREGEiExBxMiQVFhFDJxFUJSgaEWI5HBQ2KCkiQlJzM0NmNyc5OisbKz4f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGREBAQEAAwAAAAAAAAAAAAAAAAERITFB/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERZvrLV1ZVam/ZTRbR3wGZpTg7cgHAzkAAEZcQfmAAyg0hFkM1/vGg6mOo1a5lVTPdtc5mCW/QhjDuwCQCCDgjIK1uGQTRCWI5BAIPqD0KuD7REUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAUNbtM09uv897pg4SzgCQlxI4x0HlnAz9FMOcGjc7gKAuWtbfbtzJ6uDeATsEjS7jywCSgp/bHcjc+50dah3lRM9rnAfcaMlufTJ8Xs1pPmFo9spfgbdFRg57tjWZ9doAz+ix7slvVIy4VV91JURR1U0mB3jwMNOC7aXdASQ32EYC2WmqWVUQlpXte09C0gj+IVo9URFAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVL1z2gxaaeKCib8RVO4bE3J2k9N+MnJ8mjk+3VffaZq/8AZezhlF4qmbLIW4zjpl+PPGRgebi0dMrm7ONDiww/a13/AHlZL4nuccmPd1aD+L8TvM8dFRAQ6IuWsv8ACta1ToYzyKePHA46t+Rv57z7hWSg7LLZRsw6AyH1kkef0BDf4BXVV3XephpawOrWt3yuIjhZ13SO6cDkgYJIHXGOpTaOOp7NLXUM2mlDfdj3tP6OVaruymS1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G10M5aMmMOzh+PTxH+7jqQurU/aLQtsUkdqmbUzStMcUUeXOLnggbgBkD1zz5DnhXCSuhNH373sMZ8Ocggnpt+ueMLnttppIH/GW2CFhd99kbQT+YGUGbamtDtP9g/2fXDxtDHPGehfMHFufbdhSzNC1t5oWU+oLrJLTENLoWQsjJAwQ0vHOPyP8VoNVTMq4TBVsa9p6tcAQceoPC9GjaNreAmj4p4G00DYIBta0BrQPIAcD+C9ERQEREBERAREQEREBERAREQEREBERAREQFwikfGKh0LgHSO3MJHynu2NGfXluV3IghILB3NDPQCVzo5Y9niDdzTs2k8AA+EN4I6tPXK9HW6WogqGVLwO9j7sAFxaDhwLwHHjOR4R6dTlS6II+WmkqqLuajY07mEbckYY5p8wOeFy3KyGsmfPE/Y920A4z4R8zHeoPl6EA+oM0iCJntj3X37QjPGxjcd5I35HSEna07XcP+8PJdFxo3TyMmpyNzdwwSQCHjBwRy13Aw4Z8x55HciCL+z5G08JDw+SIl2X5w7cHDGclwwHYDuTxz1K8p7Q6S3dxuG4y967BcwZLiSGlp3N69Qeec9SplEEVVW509BHDxuYcg95JkcEZEgO/ODznORkHqvaqoXVVqFHM8l2Gbn/KSWlpJG0gtJx5HjK70QQr7Jtop6aFzv3j2vBc95I2hnBeXF/3OoPGeF6vtjprY2ke4tIka/Ie95w14djc87s8Y9lKoghZLM42xtKH5cJO83bntLuSclzTuDsHkjjjgAcCUo4zDTNjk6gY+Zzv+p3iP1K9kQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q=="
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">p</div>
              </div>
              <div className="user-name">
                <div className="text-truncate">
                  <a
                    className="text-break align-middle mr-1"
                    href="https://en.wikipedia.org/wiki/Postern_of_Fate"
                    rel="nofollow"
                  >
                    <span className="align-middle ng-binding"> Fasion</span>
                  </a>
                  <span className="align-middle">reviewed</span>
                </div>
                <div className="time-text ng-binding">4days-ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <a
              className="review-title text-truncate ng-binding"
              href="https://en.wikipedia.org/wiki/Postern_of_Fate"
            >
              postern of fate.com
            </a>
            <div className="user-review-content text-truncate ng-binding">
              Very Good [Product and Good Quality]
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/fate"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a
            className="recent-rev-img"
            href="https://www.nike.com"
          >
            <img
              className="image-object-fit-contain"
              src="  data:image/png;base64,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"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">G</div>
              </div>
              <div className="user-name">
                <div className="text-truncate">
                  <a
                    className="text-break align-middle mr-1"
                    href="https://www.glassdoor.co.in/Reviews/index.htm"
                    rel="nofollow"
                  >
                    <span className=" ng-binding"> Nike</span>
                  </a>
                  <span className="align-middle">reviewed by</span>
                </div>
                <div className="time-text ng-binding">5days-ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <a
              className="review-title text-truncate ng-binding"
              href="https://www.glassdoor.co.in/Reviews/index.htm"
            >
              Nike.com
            </a>
            <div className="user-review-content text-truncate ng-binding">
              Good
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/Glossdore"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.myntra.com/">
            <img
              className="image-object-fit-contain"
              src="data:image/png;base64,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"
              alt="Review Image"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">M</div>
              </div>
              <div className="user-name">
                <div className="text-truncate">
                  <a
                    className="text-break align-middle mr-1"
                    href="https://www.myntra.com/"
                    rel="nofollow"
                  >
                    <span className="align-middle ng-binding"> myntra</span>
                  </a>
                  <span className="align-middle">reviewed by</span>
                </div>
                <div className="time-text ng-binding">4days-ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <a
              className="review-title text-truncate ng-binding"
              href="https://www.myntra.com/"
            >
              Fate.com
            </a>
            <div className="user-review-content text-truncate ng-binding">
              Good [Product and Good Quality]
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/myntra"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>

        <div className="recent-rev-content box-border">
          <a className="recent-rev-img" href="https://www.ajio.com/">
            <img
              className="image-object-fit-contain"
              src="data:image/png;base64,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"
              alt="Review Image"
            />
          </a>
          <div className="recent-rev-text">
            <div className="user-details">
              <div className="user-icon">
                <div className="ng-binding">A</div>
              </div>
              <div className="user-name">
                <div className="text-truncate">
                  <a
                    className="text-break align-middle mr-1"
                    href="https://www.ajio.com/"
                    rel="nofollow"
                  >
                    <span className="align-middle ng-binding"> Ajio</span>
                  </a>
                  <span className="align-middle">reviewed by</span>
                </div>
                <div className="time-text ng-binding">10days-ago</div>
              </div>
            </div>
            <div className="star-holder ng-binding">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <a
              className="review-title text-truncate ng-binding"
              href="https://www.ajio.com/"
            >
              Ajio.com
            </a>
            <div className="user-review-content text-truncate ng-binding">
              Good Product
            </div>
            <div className="recent-rev-divider"></div>
            <NavLink to={"/card"}>
              <button type="button">
                View Reviews...
                <FaArrowRightToBracket />
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      
      {/* <Card/> */}
    </div>
  );
};

export default Home;
