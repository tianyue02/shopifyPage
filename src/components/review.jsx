import { useEffect, useState } from "react";
import RatingStar from "./rating-star";
import "./review.css";

const reviews = [
  {
    username: "atuny0",
    rating: 5,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "hbingley1",
    rating: 4,
    review:
      "I am satisfied with the value for money of the product. Everything seems nice but the delivery time seems a bit delayed.",
  },
  {
    username: "rshawe2",
    rating: 3,
    review:
      "I found the product not long lasting. The quality also seemed a bit downgraded. I don't think it's value for money.",
  },
  {
    username: "yraigatt3",
    rating: 4,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "kmeus4",
    rating: 3,
    review:
      "The quality could have been better. I feel like wasting my money. I should have been more careful while buying it.",
  },
  {
    username: "dpettegre6",
    rating: 5,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "ggude7",
    rating: 4,
    review:
      "I am satisfied with the value for money of the product. Everything seems nice but the delivery time seems a bit delayed.",
  },
  {
    username: "nloiterton8",
    rating: 3,
    review:
      "I found the product not long lasting. The quality also seemed a bit downgraded. I don't think it's value for money.",
  },
  {
    username: "umcgourty9",
    rating: 4,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "rhallawellb",
    rating: 3,
    review:
      "The quality could have been better. I feel like wasting my money. I should have been more careful while buying it.",
  },
];

const getShuffledReviews = () => {
  const start = Math.floor(Math.random() * (reviews.length - 5));
  return reviews.slice(start, start + 5);
};

const Reviews = ({ id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getShuffledReviews());
  }, [id]);

  return (
    <div className="reviews-container">
      <h1 className="reviews-title">Reviews</h1>
      <div className="reviews-list">
        {items.map(({ username, rating, review }) => (
          <div key={username} className="review-item">
            <h3 className="review-username">{username}</h3>
            <RatingStar rating={rating} />
            <p className="review-text">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
