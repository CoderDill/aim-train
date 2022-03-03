import "./AimRange.css";
import { useTimer } from "use-timer";
import React, { useState, useEffect, useRef, useCallback } from "react";

function AimRange({ getRange }) {
  const { time, start, reset, status } = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      setScore(0)
      setStartGame(true)
    },
  });
  const [score, setScore] = useState(0);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [startGame, setStartGame] = useState(true);
  const range = useRef();

  
  
  const target = {
    position: "absolute",
    top: `${height}px`,
    right: `${width}px`,
    fontColor: "white",
  };

  function addScore() {
    setScore(score + 1);
    setWidth(Math.floor(Math.random() * range.current.clientWidth));
    setHeight(Math.floor(Math.random() * range.current.clientHeight));
  }

  const startAim = useCallback(() => {
    start()
    setStartGame(false)
    const interval = setInterval(() => {
      const newWidth = Math.floor(Math.random() * range.current.clientWidth);
      setWidth(newWidth);

      const newHeight = Math.floor(Math.random() * range.current.clientHeight);
      setHeight(newHeight);
    }, 750);
    return () => clearInterval(interval);
  });

  function restartGame() {
    reset()
    setStartGame(true)
    setScore(0)
  }

  return (
    <div className="aimRange" ref={range}>
      {status === "RUNNING" ? (
        <button className="btn btn-success m-1" onClick={restartGame}>
          Reset
        </button>
      ) : (
        <button className="btn btn-success m-1" onClick={startAim}>
          Start
        </button>
      )}
      <span style={{ padding: "1em", color: "white" }}>
        Timer: {time} Score: {score}
      </span>
      

      <div className="target" hidden={startGame} style={target} onClick={addScore}></div>
    </div>
  );
}

export default AimRange;
