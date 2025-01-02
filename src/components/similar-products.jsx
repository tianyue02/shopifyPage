import { useState, useEffect } from "react";
import ProductCard from "./product-card";
import "../css/components-css/similar.css";

const SimilarProducts = ({ category }) => {
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          setSimilarProducts(data.products.slice(0, 4));
        });
    }
  }, [category]);

  return (
    <div className="similar-products-container">
      <h3>Similar Products</h3>
      <div className="similar-products-list">
        {similarProducts.length > 0 ? (
          similarProducts.map((product) => (
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
          ))
        ) : (
          <p>No similar products</p>
        )}
      </div>
    </div>
  );
};

export default SimilarProducts;
