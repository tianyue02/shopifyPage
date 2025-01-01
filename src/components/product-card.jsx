import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../css/components-css/product-card.css";
import PriceSection from "./price";
import RatingStar from "./rating-star";
import { useState } from "react";
import { useCart } from "../context/cart-context";
import "../index.css";
import { useTheme } from "../context/theme-context";

const ProductCard = ({
  id,
  price,
  thumbnail,
  title,
  category,
  rating,
  discountPercentage,
}) => {
  const [message, setMessage] = useState("");
  const { dispatch } = useCart();
  const { isDarkMode } = useTheme();
  const addToCart = () => {
    const action = {
      type: "ADD_TO_CART",
      payload: {
        id,
        price,
        title,
        category,
        rating,
        thumbnail,
        discountPercentage,
      },
    };
    console.log("Dispatch Action:", action);
    dispatch(action);
  };
  return (
    <div className={`product-card ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {message && <p className="message">{message}</p>}
      <div className="product-image-container">
        <Link to={`/product/${id}`}>
          <img src={thumbnail} alt={title} className="product-image" />
        </Link>
      </div>
      <div className="product-info">
        <p className="product-category">{category}</p>
        <Link to={`/product/${id}`} className="product-title">
          {title}
        </Link>
      </div>
      <div className="rating-star-section">
        <RatingStar rating={rating} className="rating-star" />
      </div>
      <div className="product-footer">
        {discountPercentage && (
          <PriceSection discountPercentage={discountPercentage} price={price} />
        )}
        <button className="add-to-cart-btn" type="button" onClick={addToCart}>
          <AiOutlineShoppingCart />
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
