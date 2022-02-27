import "./AimRange.css";
import { useTimer } from "react-timer-hook";
import React, { useState, useEffect } from "react";

function AimRange({ expiryTimestamp }) {
  const { seconds, start, restart, isRunning } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.log("game Over"),
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
  }, [expiryTimestamp]);

  return (
    <div className="aimRange">
      {isRunning ? (
        <button className="btn btn-success m-1" onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time)
        }}>
          Restart
        </button>
      ) : (
        <button className="btn btn-success m-1" onClick={start}>
          Start
        </button>
      )}
      <span style={{ padding: "1em" }}>Timer: {seconds}</span>
      Score: {score}
      <div className="target" style={target} onClick={addScore}></div>
    </div>
  );
}

export default AimRange;
