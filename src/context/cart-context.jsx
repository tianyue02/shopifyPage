import { useContext, useReducer, createContext } from "react";
const initialState = {
  cartOpen: false,
  cartItems: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.cartItems.some(
        (item) => item.id === action.payload.id
      );

      if (!existingIndex) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };

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
    case "REMOVE_FROM_CART":
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cartItems: updatedCart };
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
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
