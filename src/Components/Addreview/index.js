import React, { useState } from "react";

import {
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "./index.css";

const Review = ({ reviewText, onEdit, onDelete }) => {
  return (
    <div className="review">
      <p>{reviewText}</p>
      <button type="button" onClick={onEdit} className="btn btn-warning">
        Edit
      </button>
      <button type="button" onClick={onDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

const AddReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reviewText);
    setReviewText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          placeholder="Type your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </FormGroup>
      <Button color="dark" type="submit">
        Add Review
        
      </Button>
    </Form>
  );
};

const Index = () => {
  const [reviewsData, setReviewsData] = useState([
    // Array of initial review data
    { id: 1, text: "Great review 1" },
    { id: 2, text: "Awesome review 2" },
    // Add more reviews as needed
  ]);

  const handleEdit = (id) => {
    // Implement logic to handle edit action
    console.log(`Edit review with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement logic to handle delete action
    console.log(`Delete review with ID: ${id}`);
  };

  const handleAddReview = (text) => {
    // Add a new review to the state
    const newReview = { id: Date.now(), text };
    setReviewsData((prevReviews) => [...prevReviews, newReview]);
  };
  

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="container mt-3">
              <AddReviewForm onSubmit={handleAddReview} />
              <div className="card-container2">
                <h1>Reviews</h1>
                {reviewsData.map((review) => (
                  <Review
                    key={review.id}
                    reviewText={review.text}
                    onEdit={() => handleEdit(review.id)}
                    onDelete={() => handleDelete(review.id)}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
