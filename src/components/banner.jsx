import React from "react";
import { Link } from "react-router-dom";
import "./banner.css"

const Banner = () => {
  return (
    <div className="banner-container">
      <img src="/banner.jpg" alt="banner" className="banner-image" />
      <div className="banner-content">
        <h1 className="banner-title1">Don't miss the offer</h1>
        <h2 className="banner-title2">Grab it now</h2>
        <Link to="/product/4" className="banner-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;

