import React from "react";
import { motion } from "framer-motion";
import "./RankCard.css";
import chestImg from "../assets/images/chest.png";
import AutoReverseTimer from "./Timerbutton";

const Timercard = () => {
  return (
    <motion.div
      className="rankChest-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img className="chest" src={chestImg} alt="chest card" />
      <p>Unranked</p>
      <button id="openbtn">opens in {<AutoReverseTimer />}</button>
    </motion.div>
  );
};

export default Timercard;
