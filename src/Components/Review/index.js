import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./index.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="container mt-3  d-flex justify-content-center align-item-center">
              <div className="card-container1   ">
                <button type="button" className="btn btn-info ">
                  Submit Review
                </button>
                <NavLink to={"/Edit"}>
                <button type="button" className="btn btn-info ">
                  Edit Review
                </button>
                </NavLink>
                <button type="button" className="btn btn-info ">
                  Delete Review
                </button>
                {/* {*<NavLink to={"/Addreview"}>
                <button type="button" className="btn btn-info ">
                  Add Review
                </button>
                </NavLink>*} */}
                <button type="button" className="btn btn-info "  onClick={() => navigate("/reviewdetials")}  >
                  Add Review
                </button>


                <button type="button" className="btn btn-info ">
                  Like
                </button>
                <button type="button" className="btn btn-info ">
                  Followers
                </button>
               
                <div className="heding">
                  <p>Activities</p>
                  <h2>Total review:0</h2>
                  <h2>Total Comments:0</h2>
                  <h2>Total likes:0</h2>
                  <h2>Followers:0</h2>
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
