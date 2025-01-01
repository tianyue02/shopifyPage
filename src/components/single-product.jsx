import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PriceSection from "./price";
import Reviews from "./review";
import RatingStar from "./rating-star";
import "../css/components-css/single-product.css";
import "../index.css";
import { useTheme } from "../context/theme-context";
import { useWishList } from "../context/wishList-context";
import { useCart } from "../context/cart-context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import SimilarProducts from "../context/similar-products";

const SingleProduct = () => {
  const { isDarkMode } = useTheme();
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [imgs, setImgs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const { addToWishList } = useWishList();
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setImgs(data.images);
        setSelectedImg(data.thumbnail);
      });
  }, [productID]);

  const handleAddToWishList = () => {
    if (product) {
      addToWishList(product);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          price: product.price,
          title: product.title,
          category: product.category,
          rating: product.rating,
          thumbnail: product.thumbnail,
          discountPercentage: product.discountPercentage,
        },
      });
    }
  };

  const handleBuyNow = () => {
    if (product) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: product.id,
          price: product.price,
          title: product.title,
          category: product.category,
          rating: product.rating,
          thumbnail: product.thumbnail,
          discountPercentage: product.discountPercentage,
        },
      });
      dispatch({ type: "SET_CART_STATE", payload: true });
    }
  };

  return (
    <div
      className={`single-product-container ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
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
          <div className="product-cate">category :{product?.category}</div>
          <div className="product-brand">brand :{product?.brand}</div>
          <div className="product-stock">
            <h3>Stock: </h3>
            <p>{product?.stock}</p>
          </div>
          <div className="product-about">
            <h3>About the Product</h3>
            <p>{product?.description}</p>
          </div>
          <div className="all-button">
            <button className="wish-button" onClick={handleAddToWishList}>
              <MdFavoriteBorder className="wish-icon" />
              ADD TO WISHLIST
            </button>
            <button className="hand-button" onClick={handleBuyNow}>
              <FaHandHoldingDollar className="wish-icon" />
              BUY NOW
            </button>
            <button className="cart-button" onClick={handleAddToCart}>
              <AiOutlineShoppingCart className="wish-icon" />
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="single-product-reviews">
          <Reviews id={parseInt(productID)} />
        </div>
      </div>
      <div className="similar-section">
        {product?.category && <SimilarProducts category={product.category} />}
      </div>
    </div>
  );
};

export default SingleProduct;
