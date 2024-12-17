import React from "react";
import ProductCard from "./product-card";
import "../css/components-css/product-list.css";
import "../index.css";

const ProductList = ({ title, products }) => (
  <div className="product-list-container">
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

export default ProductList;
