import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./navBar.css";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { message } from "antd";
import { useTheme } from "../context/theme-context";
import { useCart } from "../context/cart-context";
import "../index.css";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { isLoggedIn, username, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    if (!isLoggedIn) {
      message.warning("Please Login");
      navigate("/login");
    } else {
      dispatch({ type: "SET_CART_STATE", payload: !state.cartOpen });
    }
  };

  const getCartItemCount = () => {
    const uniqueItems = state.cartItems.map((item) => item.id);
    const uniqueItemsSet = new Set(uniqueItems);
    return uniqueItemsSet.size;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const RenderUserLogin = () => {
    if (!isLoggedIn) {
      return (
        <div className="user-section">
          <FaUser className="user-icon" />
          <span
            className="not-login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </div>
      );
    }
    return (
      <div className="user-section">
        <img
          src="https://robohash.org/Terry.png?set=set4"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="nav-link-right" onClick={toggleMenu}>
          {username}
        </div>
        {isMenuOpen && (
          <div className="dropdown-menu-list" onMouseLeave={closeMenu}>
            <table>
              <tbody>
                <tr>
                  <td className="icon-cell">
                    <MdOutlineAccountCircle className="icon-inner" />
                  </td>
                  <td className="link-cell">
                    <Link
                      to="/account"
                      className="link-inner-cell"
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      Account
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="icon-cell">
                    <FaRegHeart className="icon-inner" />
                  </td>
                  <td className="link-cell">
                    <Link
                      to="/wishes"
                      className="link-inner-cell"
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      Wishes
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="icon-cell">
                    <LuLogOut className="icon-inner" />
                  </td>
                  <td className="link-cell">
                    <Link
                      to="/"
                      className="link-inner-cell"
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                    >
                      Logout
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`nav-bar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="nav-bar-container">
        <div className="nav-bar-logo">
          <Link to="/" className="nav-link">
            Shopify
          </Link>
          <div className="nav-bar-search">
            <input
              type="text"
              placeholder="Search for a product..."
              className="search-input"
            />
            <div className="search-icon">
              <BsSearch />
            </div>
          </div>
          <div className="nav-bar-right">
            <Link className="nav-link-right" to="/products">
              Products
            </Link>
            <Link className="nav-link-right" to="./category">
              Categories
            </Link>
            {RenderUserLogin()}
            <div className="cart-icon">
              <AiOutlineShoppingCart onClick={toggleCart} />
              {getCartItemCount() > 0 && (
                <div className="cart-count">{getCartItemCount()}</div>
              )}
            </div>
            <div className="dark-light">
              {isDarkMode ? (
                <MdOutlineDarkMode
                  onClick={toggleTheme}
                  className="theme-change"
                />
              ) : (
                <MdOutlineLightMode
                  onClick={toggleTheme}
                  className="theme-change"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavigationBar;
