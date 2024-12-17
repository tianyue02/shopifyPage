import React from "react";
import { useCart } from "../context/cart-context";
import { MdDelete } from "react-icons/md";

const CartRow = ({ id, thumbnail, title, price, quantity, discountPercentage }) => {
  const { dispatch } = useCart();

  if (!id || !title || !quantity) {
    console.error("CartRow missing data:", { id, title, quantity });
    return null;
  }

  console.log("Rendering CartRow for:", { id, title, quantity });

  const discountedPrice = price - (price * discountPercentage) / 100;

  return (
    <div className="cart-row">
      <img src={thumbnail} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>${discountedPrice.toFixed(2)}</p>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "REDUCE_FROM_CART", payload: id });
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: { id, title, price, quantity, discountPercentage },
              });
            }}
          >
            +
          </button>
        </div>
      </div>
      <MdDelete
        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: id })}
      />
    </div>
  );
};

export default CartRow;


  