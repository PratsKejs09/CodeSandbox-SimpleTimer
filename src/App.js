import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [pause, setPause] = useState(false);
  const [timer, setTimer] = useState(0);
  // let count = 0;
  useEffect(() => {
    if (!pause) {
      let value = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
      return () => {
        clearTimeout(value);
      };
    }
  });
  const setButtonText = () => {
    setPause(!pause);
  };
  return (
    <div className="App">
      <h2> Simple Countdown Timer App </h2>
      <button onClick={setButtonText} className="btn-con">
        {pause ? "Pause" : "Continue"}
      </button>
      <span> {timer} </span>
      <button onClick={() => setTimer(0)} className="btn-pause">
        Reset
      </button>
    </div>
  );
}
