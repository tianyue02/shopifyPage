import React, { createContext, useContext, useState, useEffect } from "react";
import { message } from "antd";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();

        if (Array.isArray(data)) {
          const formattedCategories = data
            .filter(
              (item) => typeof item === "object" && item?.slug?.trim() !== ""
            )
            .map((item) => ({
              name: item.slug,
              displayName:
                item.name ||
                item.slug.slice(0).toUpperCase() + item.slug.slice(1),
            }));
          setCategories(formattedCategories);
        } else {
          message.error("Unexpected data format:", data);
        }
      } catch (error) {
        message.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, loading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
