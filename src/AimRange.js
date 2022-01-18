import "./AimRange.css"
import { useStopwatch } from 'react-timer-hook'
import { useState } from "react"

function AimRange() {
    const { seconds, start, pause } = useStopwatch(0)
    const [score, setScore] = useState(0)

    function addScore() {
        setScore(score + 1)
    }
  
  function makeTargets() {
    const targets = []
    for (let i = 0; i <= 500; i++) {
      targets.push(<div className="target" onClick={addScore}></div>);
    }
    return targets;
    }
     
    return (
      <div className="aimRange border">
        <button className="btn btn-success" onClick={start}>
          Start
        </button>
        <span style={{ padding: "1em" }}>Timer: {seconds}</span>
        Score: {score}
        <div className="targetList">{makeTargets()}</div>
      </div>
    );
}

export default AimRange;