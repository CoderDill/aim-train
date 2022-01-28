import "./AimRange.css";
import { useStopwatch } from "react-timer-hook";
import React, { useState } from "react";

function AimRange() {
  const { seconds, start, pause } = useStopwatch(0);
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState([]);

  function addScore() {
    setScore(score + 1);
  }


  return (
    <div className="aimRange border">
      <button className="btn btn-success">
        Start
      </button>
      <span style={{ padding: "1em" }}>Timer: {seconds}</span>
      Score: {score}
      
        <div
          style={{
            position: "absolute",
            top: "400px",
            right: "120px",
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
          onClick={addScore}
        ></div>
      
    </div>
  );
}

export default AimRange;
