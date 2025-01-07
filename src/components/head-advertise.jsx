import { Link } from "react-router-dom";
import "./head-ad.css"
const HeadAdvertise = () => {
  return (
    <div className="ad-container">
      <div className="ad-outer">
        <div className="left-space">
          <div className="space">
            <p>Starting At $999</p>
            <h2>The best notebook collection 2024</h2>
            <h3>Exclusive offer <span className="discount">-10%</span> off this week</h3>
            <Link to="/product/6" className="buy-link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="right-space">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};
export default HeadAdvertise;
