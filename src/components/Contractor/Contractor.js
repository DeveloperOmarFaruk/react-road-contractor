import React from "react";
import "./Contractor.css";
import Rating from "react-rating";

const Contractor = (props) => {
  //destructuring props
  const {
    name,
    company_name,
    worker_size,
    budget,
    works_ratings,
    works_review,
    experience_year,
    img,
  } = props.contractor;

  const handleAddCart = props.handleAddCart;

  return (
    <div className="contractor-card">
      <div className="card-img">
        <img src={img} alt={img} />
      </div>

      <div className=" contractor-card-body">
        <div className="card-title">
          <h3>{name}</h3>
          <p>
            <small>{company_name}</small>
          </p>
        </div>

        <p>
          <strong>Salary: </strong> ${budget}
        </p>
        <p>
          <strong>Worker Size: </strong> {worker_size}
        </p>
        <p>
          <strong>Experience: </strong> {experience_year} Years
        </p>
        <p>
          <strong>Reviews: </strong> {works_review}
        </p>
        <p>
          <strong>Ratings: </strong>
          <Rating
            initialRating={works_ratings}
            readonly
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
          />
        </p>

        <button
          onClick={() => {
            handleAddCart(props.contractor);
          }}
        >
          {" "}
          <i class="fa-solid fa-cart-shopping"></i> &nbsp; Add to cart
        </button>
      </div>
    </div>
  );
};

export default Contractor;
