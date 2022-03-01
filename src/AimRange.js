import "./AimRange.css";
import { useTimer } from "use-timer";
import React, { useState, useEffect } from "react";

function AimRange() {
  const { time, start, reset, status } = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      console.log("Times Up")
    }
  });
  const [score, setScore] = useState(0);
  const [top, setTop] = useState(
    Math.floor(Math.random() * window.innerHeight)
  );
  const [right, setRight] = useState(
    Math.floor(Math.random() * window.innerWidth)
  );

  const target = {
    position: "absolute",
    top: `${top}px`,
    right: `${right}px`,
    fontColor: 'white'
  };

  function addScore() {
    setScore(score + 1);
    setRight(Math.floor(Math.random() * window.innerWidth));
    setTop(Math.floor(Math.random() * 1029));
  }

  function getRange(x, y) {}

  useEffect(() => {
    const interval = setInterval(() => {
      let width = Math.floor(Math.random() * window.innerWidth);
      let height = Math.floor(Math.random() * 1029);

      if (height < 20) height += 20;
      if (height > 1000) height -= 250;

      if (width < 15) width += 15;
      if (width > window.innerWidth - 15) width -= 15;
      setRight(width);
      setTop(height);
    }, 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aimRange">
      {status === "RUNNING" ? (
        <button className="btn btn-success m-1" onClick={reset}>Reset</button>
      ) : (
        <button className="btn btn-success m-1" onClick={start}>
          Start
        </button>
      )}
      <span style={{ padding: "1em", color: "white" }}>
        Timer: {time} Score: {score}
      </span>

      <div className="target" style={target} onClick={addScore}></div>
    </div>
  );
}

export default AimRange;
