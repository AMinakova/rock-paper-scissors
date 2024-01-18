import { useState } from "react";
import "./App.css";
import { ScoreBoard } from "./components/ScoreBoard";
import { ChoicesDashboard } from "./components/choices/ChoicesDashboard";

function App() {
  const [count, setCount] = useState(0);
  const [chosenIcon, setChosenIcon] = useState("");

  console.log(chosenIcon);
  return (
    <>
      <ScoreBoard count={count}></ScoreBoard>
      <ChoicesDashboard
        handleChoice={(value) => setChosenIcon(value)}
      ></ChoicesDashboard>
    </>
  );
}

export default App;
