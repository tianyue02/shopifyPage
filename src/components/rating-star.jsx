import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "../css/components-css/rating-star.css";

const RatingStar = ({ rating }) => {
  const ratingNum = parseFloat(rating.toString());
  const main = Math.floor(ratingNum);
  const other = 5 - main;

  const filledStars = Array(main).fill(<AiFillStar />);
  const emptyStars = Array(other).fill(<AiOutlineStar />);

  return (
    <div className="rating-star-container">
      <div className="stars">
        {filledStars}
        {emptyStars}
      </div>
      <span className="rating-value">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStar;
