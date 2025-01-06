import React from "react";
import ProductCard from "./product-card";
import "./product-list.css";
import "../index.css";
import { useTheme } from "../context/theme-context";

const ProductList = ({title ,products}) => {
  const {isDarkMode} = useTheme();
  return (
    <div className={`product-list-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
    <div className="header">
      <h2>{title}</h2>
    </div>
    <div className="product-list">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          category={product.category}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
          rating={product.rating}
          discountPercentage={product.discountPercentage}
        />
      ))}
    </div>
  </div>
  );
}


export default ProductList;
