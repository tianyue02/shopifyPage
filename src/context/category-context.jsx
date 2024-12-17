import React, { createContext, useContext, useState, useEffect } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        console.log("Fetched categories data:", data);

        if (Array.isArray(data)) {
          const formattedCategories = data
            .filter(
              (item) =>
                typeof item === "object" &&
                item.slug &&
                typeof item.slug === "string" &&
                item.slug.trim() !== ""
            )
            .map((item) => ({
              name: item.slug,
              displayName:
                item.name ||
                item.slug.charAt(0).toUpperCase() + item.slug.slice(1),
            }));

          console.log("Formatted categories:", formattedCategories);
          setCategories(formattedCategories);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
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
