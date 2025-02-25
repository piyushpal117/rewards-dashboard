import { useState } from "react";
import { motion } from "framer-motion";
import xpCoin from "../assets/images/xpCoin.png";
import "./xpCard.css";

const XpCard = () => {
  const [progress, setProgress] = useState(0);

  const handleGainXP = () => {
    setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
  };

  return (
    <div className="rank-card">
      <h2 className="rank-title">Your Current Rank</h2>
      <div className="rank-header">
        <span>Unranked</span>
        <span>See all ranks ▼</span>
      </div>

      <div className="progress-container">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" className="progress-bg" />

          <motion.circle
            cx="50"
            cy="50"
            r="40"
            className="progress-bar"
            strokeDasharray="251.2"
            strokeDashoffset={(1 - progress / 100) * 251.2}
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: (1 - progress / 100) * 251.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </svg>
        <img src={xpCoin} alt="Rank Icon" className="coin-icon" />
      </div>

      {/* XP Info */}
      <div className="xp-info">
        <span className="xp-amount">{100 - progress}</span>
        <span className="xp-text">remaining to rank up</span>
      </div>

      {/* Gain XP Button */}
      <button onClick={handleGainXP} className="gain-xp-btn">
        Gain XP +10
      </button>
    </div>
  );
};

export default XpCard;
