import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../assets/images/banner.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link to="/dashboard">
      <motion.div
        className="banner"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={bannerImage} alt="Rewards Banner" />
      </motion.div>
    </Link>
  );
};

export default Banner;
