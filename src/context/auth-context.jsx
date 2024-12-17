import React, { createContext, useState, useContext } from "react";
import { message } from "antd";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("username"));
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  const login = (username, password) => {
    if (username === "atuny0" && password === "9uQFF1Lh") {
      setIsLoggedIn(true);
      setUsername(username);
      localStorage.setItem("username", username);
      message.success("Login Successful!");
    } else {
      message.error("Invalid username or password,please try again!");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("username");
  };

  const value = {
    isLoggedIn,
    username,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
