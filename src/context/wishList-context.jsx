import { useContext, useState, createContext } from "react";
const WishListContext = createContext();
export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (product) => {
    setWishList((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };
  const removeFromWishList = (id) => {
    setWishList((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };
  return (
    <WishListContext.Provider
      value={{ wishList, addToWishList, removeFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};
