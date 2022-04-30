import { useState } from "react";
import "./App.css";
import Stopwatch from "./Components/Stopwatch";
import Timer from "./Components/Timer";

function App() {
  const [tab, setTab] = useState(false);

  const handleClick = () => {
    setTab(!tab);
  };

  return (
    <div className="App">
      <button
        className="headButton"
        onClick={handleClick}
        disabled={tab == true}
      >
        Stopwatch
      </button>

      <button
        className="headButton"
        onClick={handleClick}
        disabled={tab == false}
      >
        Timer
      </button>

      {tab ? <Stopwatch /> : <Timer />}
    </div>
  );
}

export default App;
