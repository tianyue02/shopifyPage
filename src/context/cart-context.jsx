import { useContext, useReducer, createContext } from "react";
const initialState = {
  cartOpen: false,
  cartItems: [],
};
const cartReducer = (state, action) => {
  console.log("Reducer Action:", action);
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex === -1) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };

        if (!newItem.id || !newItem.title || !newItem.quantity) {
          console.error("ADD_TO_CART received incomplete data:", newItem);
        }

        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      } else {
        const updatedCart = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cartItems: updatedCart };
      }

    case "REDUCE_FROM_CART":
      const reducedCart = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );
      return { ...state, cartItems: reducedCart };
    case "SET_CART_STATE":
      return { ...state, cartOpen: action.payload };
    case "EMPTY_CART":
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log("Cart State:", state);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
