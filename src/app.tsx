import { useState } from "react";
import "./App.css";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { GameDashboard } from "./components/GameDashboard/GameDashboard";
import { AppContext } from "./AppContext";
import { FigureType } from "./components/figure/Figure";

function App() {
  const [count, setCount] = useState(0);
  const [userChoice, setUserChoice] = useState<FigureType>("");
  const [appChoice, setAppChoice] = useState<FigureType>("");

  return (
    <AppContext.Provider
      value={{ userChoice, setUserChoice, appChoice, setAppChoice }}
    >
      <div className="content">
        <div className="container">
          <ScoreBoard count={count}></ScoreBoard>
          <GameDashboard />
        </div>
        <button className="transparent">
          <p>RULES</p>
        </button>
      </div>
    </AppContext.Provider>
  );
}

export default App;
