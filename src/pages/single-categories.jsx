import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import "../components/single-product"
import { useTheme } from "../context/theme-context";
import { message } from "antd";
const SingleCategory = () => {
  const {isDarkMode} = useTheme();
  const { name } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${name}`
        );
        const data = await res.json();
        setProductList(data.products || []);
      } catch (error) {
        message.error("Error fetching products:", error);
      }
    };
    if (name) fetchProducts();
  }, [name]);

  if (!name) return <div>No category selected.</div>;

  return (
    <div className={`single-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="single-title">Category{">"} {name}</h1>
      <div className="single-list">
        {productList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;

