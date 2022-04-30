import { useState } from "react";

export default function Stopwatch() {
  //   const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  // time is ms 1s = 1000ms

  const handleStart = () => {
    const timer = setInterval(() => {
      setTime((prev) => {
        return prev + 10;
      });
    }, 10);
    setTimerId(timer);
  };

  const handleStop = () => {
    console.log("handleStop", timerId);
    clearInterval(timerId);
  };

  const s = Math.floor(time / 1000) % 60;
  const m = Math.floor((time / 1000 / 60) % 60);
  const h = Math.floor(time / 1000 / 60 / 60);
  const ms = (time % 1000) / 10;

  return (
    <div>
      <p>
        <h2 style={{ display: "inline-block" }}>{`${h}h ${m}m ${s}s`}</h2> {ms}
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Pause</button>
      <button
        onClick={() => {
          clearInterval(timerId);
          setTime(0);
          setTimerId(null);
        }}
      >
        Reset
      </button>
    </div>
  );
}
