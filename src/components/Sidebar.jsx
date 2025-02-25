import React from "react";
import { FaBars, FaGift, FaTrophy } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <FaBars className="menu-icon" />

      <FaGift className="menu-icon" />
      <FaTrophy className="menu-icon" />
    </div>
  );
};

export default Sidebar;
