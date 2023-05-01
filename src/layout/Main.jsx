import React from "react";
import "./Main.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div className="body">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
