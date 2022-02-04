import "./AimRange.css";
import { useStopwatch } from "react-timer-hook";
import React, { useState, useEffect } from "react";

function AimRange() {
  const { seconds, start, pause } = useStopwatch(0);
  const [score, setScore] = useState(0);
  // const [targets, setTargets] = useState([]);
  const [top, setTop] = useState(Math.floor(Math.random() * window.innerHeight)
);
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
    setRight(Math.floor(Math.random() * window.innerWidth));
    setTop(Math.floor(Math.random() * 1029));
  }

  function getRange(x, y) {

  }

  useEffect(() => {
    const interval = setInterval(() => {
      let width = Math.floor(Math.random() * window.innerWidth);
      let height = Math.floor(Math.random() * 1029);

      if (height < 20) height += 20
      if (height > 1000) height -= 250

      if (width < 15) width += 15;
      if (width > window.innerWidth - 15) width -= 15;
      setRight(width);
      setTop(height);
    }, 1000);
    return () => clearInterval(interval);
  }, [right, top]);

  return (
    <div className="aimRange border">
      <button className="btn btn-success" onClick={start}>Start</button>
      <span style={{ padding: "1em" }}>Timer: {seconds}</span>
      Score: {score}
      <div style={target} onClick={addScore}></div>
    </div>
  );
}

export default AimRange;
