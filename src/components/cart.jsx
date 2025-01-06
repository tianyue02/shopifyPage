import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart-context";
import CartRow from "./cart-row";
import "./cart.css";
import { MdClose } from "react-icons/md";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cartOpen, cartItems } = state;
  const [checkout, setCheckout] = useState(false);

  const closeCart = () => {
    dispatch({ type: "SET_CART_STATE", payload: false });
  };

  if (!cartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <h3>Your Cart</h3>
        <MdClose className="close-cart" onClick={closeCart} />
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              return <CartRow key={item.id} {...item} className="cart-row" />;
            })
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        {cartItems.length > 0 && (
            <div className="total">
              <h2>Total</h2>
              <h2>
                $
                {cartItems
                  ?.reduce(
                    (total, item) =>
                      total +
                      (item.price -
                        (item.price * item.discountPercentage) / 100) *
                        item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h2>
            </div>
        )}
        <button onClick={() => setCheckout(true)} className="check-button">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
 