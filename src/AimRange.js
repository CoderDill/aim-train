import "./AimRange.css";
import { useStopwatch } from "react-timer-hook";
import React, { useState } from "react";

function AimRange() {
  const { seconds, start, pause } = useStopwatch(0);
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState([]);
  const [top, setTop] = useState(
    // Math.floor(Math.random() * document.querySelector(".AimRange").offsetHeight) Doesn't work
  );
  const [right, setRight] = useState(Math.floor(Math.random() * window.innerWidth))
    
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

  

  return (
    <div className="aimRange border">
      <button className="btn btn-success">
        Start
      </button>
      <span style={{ padding: "1em" }}>Timer: {seconds}</span>
      Score: {score} {right} {top}
      
      <div
        style={target}
        onClick={addScore}
        ></div>
      
    </div>
  );
}

export default AimRange;
