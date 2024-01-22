import { useState } from "react";
import "./App.css";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { ChoicesDashboard } from "./components/ChoicesDashboard/ChoicesDashboard";
import { AppContext, Choices } from "./AppContext";

function App() {
  const [count, setCount] = useState(0);
  const [userChoice, setUserChoice] = useState<Choices>(null);
  const [appChoice, setAppChoice] = useState<Choices>(null);

  return (
    <AppContext.Provider
      value={{ userChoice, setUserChoice, appChoice, setAppChoice }}
    >
      <div className="content">
        <div className="container">
          <ScoreBoard count={count}></ScoreBoard>
          <ChoicesDashboard />
        </div>
        <button className="transparent">
          <p>RULES</p>
        </button>
      </div>
    </AppContext.Provider>
  );
}

export default App;
