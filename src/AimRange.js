import "./AimRange.css"
import { useStopwatch } from 'react-timer-hook'
import React, { useState } from "react"

function AimRange() {
  const { seconds, start, pause } = useStopwatch(0)
  const [score, setScore] = useState(0)
  const [targets, setTargets] = useState([])

    function addScore() {
        setScore(score + 1)
    }
  
  
    
  function setActiveTarget() {
    function makeTargets() {
      for (let i = 0; i <= 2200; i++) {
        targets.push(<div className="target" onClick={addScore}></div>);
      }
      return targets;
    }
    makeTargets()
    setInterval(() => {
      let random = [Math.floor(Math.random() * targets.length)];
       return targets[random] = <div className="activeTarget" onClick={addScore}></div>
      }, 1000)
    }
  
  
    return (
      <div className="aimRange border">
        <button className="btn btn-success" onClick={setActiveTarget}>
          Start
        </button>
        <span style={{ padding: "1em" }}>Timer: {seconds}</span>
        Score: {score}
        <div className="targetList">{targets}</div>
      </div>
    );
}

export default AimRange;