import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/product-card";
import "../css/components-css/single-product.css";
import { useTheme } from "../context/theme-context";
const SingleCategory = () => {
  const {isDarkMode} = useTheme();
  const { name } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("Fetching products for category:", name);
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${name}`
        );
        const data = await res.json();
        setProductList(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
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

