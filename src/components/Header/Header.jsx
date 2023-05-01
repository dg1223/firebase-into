import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="centre links">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Header;
