import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PriceSection from "./price";
import Reviews from "./review";
import RatingStar from "./rating-star";
import "../css/components-css/single-product.css";
import "../index.css";

const SingleProduct = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [imgs, setImgs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setImgs(data.images);
        setSelectedImg(data.thumbnail);
      });
  }, [productID]);

  return (
    <div className="single-product-container">
      <div className="single-product-grid">
        <div className="single-product-images">
          <img src={selectedImg} alt="Selected" className="main-image" />
          <div className="image-thumbnails">
            {imgs.map((img) => (
              <img
                key={img}
                src={img}
                alt="Thumbnail"
                className={`thumbnail ${
                  selectedImg === img ? "active-thumbnail" : ""
                }`}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>
        </div>
        <div className="single-product-details">
          <h2 className="product-title">{product?.title}</h2>
          {product?.rating && <RatingStar rating={product.rating} />}
          {product?.discountPercentage && (
            <PriceSection
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          )}
          <p>{product?.description}</p>
        </div>
      </div>
      <Reviews id={parseInt(productID)} />
    </div>
  );
};

export default SingleProduct;
