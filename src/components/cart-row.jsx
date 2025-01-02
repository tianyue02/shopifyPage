import React from "react";
import { useCart } from "../context/cart-context";
import "../css/components-css/cart-row.css";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartRow = ({
  id,
  thumbnail,
  title,
  price,
  quantity,
  discountPercentage,
}) => {
  const { dispatch } = useCart();

  if (!id || !title || !quantity) {
    return null;
  }

  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="cart-row">
      <img src={thumbnail} alt={title} />
      <div className="cart-details">
        <span className="products-title">{title}</span>
        <div className="discount-section">
          <p>${discountedPrice.toFixed(2)}</p>
        </div>
        <div className="operate-section">
          <IoIosRemoveCircleOutline
            className="subtract-button"
            onClick={() => {
              dispatch({ type: "REDUCE_FROM_CART", payload: id });
            }}
          />
          <span>{quantity}</span>
          <IoIosAddCircleOutline
            className="add-button"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { id, title, price, quantity, discountPercentage },
              });
            }}
          />
        </div>
      </div>
      <div className="delete-section">
        <RiDeleteBin6Line
          className="delete-button"
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: id })}
        />
      </div>
    </div>
  );
};

export default CartRow;
