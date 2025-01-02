import { useCategory } from "../context/category-context";
import { Link } from "react-router-dom";
import React from "react";
import "../css/page.css/category.css";
import { useTheme } from "../context/theme-context";

const Categories = () => {
  const { isDarkMode } = useTheme();
  const { categories } = useCategory();

  if (categories === null) {
    return <div>Loading categories...</div>;
  }

  if (categories.length === 0) {
    return <div>No categories available.</div>;
  }

  return (
    <div className={`category-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="category-title">Product Categories</h1>
      <div className="category-list">
        {categories.map(({ name, displayName }) => (
          <div key={name} className={`category-item ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <div className="category-name">{displayName}</div>
            <Link to={`/category/${name}`} className="category-link">
              View products
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
