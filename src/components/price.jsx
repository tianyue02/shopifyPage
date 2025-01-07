import React from "react";
import useDiscount from "../hooks/useDiscount";
import "./price.css";

const PriceSection = ({ price, discountPercentage = 0 }) => {
  const result = useDiscount({ price, discount: discountPercentage });
  const discount = parseFloat(discountPercentage.toString());

  if (Math.floor(discount) === 0) {
    return <h2 className="price">${price}</h2>;
  }

  return (
    <div className="price-container">
      <h2 className="price">
        ${result.toFixed(2)}
      </h2>
      <span className="origin-price">
        ${price}
      </span>
      <span className="reduce-price">
        -{discountPercentage}%
      </span>
    </div>
  );
};

export default PriceSection;