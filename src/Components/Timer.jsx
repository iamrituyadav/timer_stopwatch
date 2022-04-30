import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const handleClick = () => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

        return prev;
      });
    }, 1000);
    setTimerId(timer);
  };

  const handleChange = (e) => {
    let t = e.target.value.split(":");

    let m = +t[0];
    let s = +t[1];
    let input_time = s + m * 60;
    setTime(input_time);
  };

  return (
    <div>
      <h2>{time}</h2>
      <input type="time" placeholder="Enter Time" onChange={handleChange} />
      <button onClick={handleClick}>Start</button>
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
