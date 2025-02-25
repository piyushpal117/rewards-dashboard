import { useState, useEffect } from "react";

const AutoReverseTimer = () => {
  const initialTime = 12 * 60 * 60; // 12 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Format time as HH:MM:SS
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div
      style={{
        fontSize: "14px",

        textAlign: "center",
        padding: "6px",
      }}
    >
      {formatTime(timeLeft)}
    </div>
  );
};

export default AutoReverseTimer;
