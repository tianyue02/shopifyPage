// import { useState } from "react";
// import { useCart } from "../context/cart-context";
// import CartRow from "./cart-row";
// import { useEffect } from "react";
// const Cart = () => {
//   const { state, dispatch } = useCart();
//   const { cartOpen, cartItems } = state;
//   const [checkout, setCheckout] = useState(false);
//   console.log("Cart Items in Cart Component:", cartItems);
//   console.log("Type of Cart Items:", typeof cartItems);
//   console.log("Cart Items Length:", cartItems.length);
//   console.log("Type of Cart Items:", Array.isArray(cartItems));

//   useEffect(() => {
//     console.log("Cart Items Updated:", cartItems);
//   }, [cartItems]);

//   const calculateTotal = () => {
//     return cartItems
//       .reduce(
//         (total, item) =>
//           total +
//           (item.price - (item.price * item.discountPercentage) / 100) *
//             item.quantity,
//         0
//       )
//       .toFixed(2);
//   };

//   const handleOrder = () => {
//     dispatch({ type: "SET_CART_STATE", payload: false });
//     dispatch({ type: "EMPTY_CART" });
//     setCheckout(false);
//     alert("Your order has been confirmed!");
//   };
//   if (!cartOpen) return null;
//   return (
//     <div className="cart-overlay">
//       {checkout ? (
//         <div className="cart-checkout">
//           <h1>Checkout</h1>
//           <p>This is a development project. Confirm your order or cancel.</p>
//           <div>
//             <button onClick={() => setCheckout(false)}>Cancel</button>
//             <button onClick={handleOrder}>Confirm</button>
//           </div>
//         </div>
//       ) : (
//         <div className="cart-container">
//           <h3>Your Cart</h3>
//           <div>
//             {cartItems.length > 0 ? (
//               cartItems.map((item,index) => {
//                 console.log("Rendering Cart Item:", item);
//                 console.log(`Rendering Cart Item at index ${index}:`, item);
//                 return <CartRow key={item.id} {...item} />;
//               })
//             ) : (
//               <p>Your cart is empty</p>
//             )}
//           </div>
//           {cartItems.length > 0 && (
//             <>
//               <h2>Total: ${calculateTotal()}</h2>
//               <button onClick={() => setCheckout(true)}>CHECKOUT</button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
// export default Cart;

import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart-context";
import CartRow from "./cart-row";
import "../css/page.css/cart.css";

const Cart = () => {
  const { state } = useCart();
  const { cartOpen, cartItems } = state;
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    console.log("Cart Component Mounted");
    console.log("Cart Items in Cart Component:", cartItems);
  }, []);

  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
    if (cartItems.length > 0) {
      cartItems.forEach((item, index) => {
        console.log(`Item at index ${index}:`, item);
      });
    }
  }, [cartItems]);

  if (!cartOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <h3>Your Cart</h3>
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => {
              console.log(`Rendering CartRow for item at index ${index}:`, item);
              return <CartRow key={item.id} {...item} />;
            })
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <>
            <h2>
              Total: $
              {cartItems
                .reduce(
                  (total, item) =>
                    total +
                    (item.price - (item.price * item.discountPercentage) / 100) *
                      item.quantity,
                  0
                )
                .toFixed(2)}
            </h2>
            <button onClick={() => setCheckout(true)}>CHECKOUT</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

