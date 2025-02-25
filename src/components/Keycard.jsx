import React from "react";
import { motion } from "framer-motion";
import "./RankCard.css";
import key from "../assets/images/key.png";

const Keycard = () => {
  return (
    <motion.div
      className="rankChest-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img className="chest" src={key} alt="chest card" />
      <p>Unranked</p>
      <button id="openbtn">View Chest</button>
    </motion.div>
  );
};

export default Keycard;
