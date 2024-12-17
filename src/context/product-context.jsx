import React, { createContext, useContext, useState } from "react";

const ProductApiContext = createContext(); 

export const ProductApiProvider = ({ children }) => {
  const [trendingProducts,setTrendingProducts] = useState([]);
  const [newestProducts,setNewestProducts] = useState([]);
  const [allProduct,setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchProducts = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json(); 
      const allProducts = data.products || [];
      setAllProduct(allProducts);
      setTrendingProducts(allProducts.slice(0,8));
      setNewestProducts(allProducts.slice(8,16));
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductApiContext.Provider value={{ trendingProducts,newestProducts, fetchProducts, loading ,allProduct }}>
      {children}
    </ProductApiContext.Provider>
  );
};

export const useProductApi = () => useContext(ProductApiContext);
