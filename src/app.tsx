import { useState } from "react";
import "./App.css";
import { ScoreBoard } from "./components/ScoreBoard";
import { ChoicesDashboard } from "./components/choices/ChoicesDashboard";

function App() {
  const [count, setCount] = useState(0);
  const [chosenIcon, setChosenIcon] = useState("");

  console.log(chosenIcon);
  return (
    <div className="content">
      <div className="container">
        <ScoreBoard count={count}></ScoreBoard>
        <ChoicesDashboard
          handleChoice={(value) => setChosenIcon(value)}
        ></ChoicesDashboard>
      </div>
      <button className="transparent">
        <p>RULES</p>
      </button>
    </div>
  );
}

export default App;
