import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">© Copyright | All Rights Reserved</div>
      <div>
        <Link to="https://alim1496.github.io/" className="footer-link">
          M A Alim
        </Link>
      </div>
    </div>
  );
};
export default Footer;
