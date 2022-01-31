import "./AimRange.css";
import { useStopwatch } from "react-timer-hook";
import React, { useState, useEffect } from "react";

function AimRange() {
  const { seconds, start, pause } = useStopwatch(0);
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState([]);
  const [top, setTop] = useState();
  // Math.floor(Math.random() * document.querySelector(".AimRange").offsetHeight) Doesn't work
  const [right, setRight] = useState(
    Math.floor(Math.random() * window.innerWidth)
  );

  const target = {
    position: "absolute",
    top: `${top}px`,
    right: `${right}px`,
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    backgroundColor: "white",
  };
  function addScore() {
    setScore(score + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const width = Math.floor(Math.random() * window.innerWidth);
      if (width < 15) width += 15;
      if (width > window.innerWidth - 15) width -= 15;
      setRight(width);
    }, 1000);
    return () => clearInterval(interval);
  }, [right, top]);

  return (
    <div className="aimRange border">
      <button className="btn btn-success">Start</button>
      <span style={{ padding: "1em" }}>Timer: {seconds}</span>
      Score: {score} {right} {top}
      <div style={target} onClick={addScore}></div>
    </div>
  );
}

export default AimRange;
