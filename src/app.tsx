import { useState } from "react";
import "./App.css";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { GameDashboard } from "./components/GameDashboard/GameDashboard";
import { AppContext } from "./AppContext";
import { FigureType } from "./components/figure/Figure";

function App() {
  const [score, setScore] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<FigureType>("");
  const [appChoice, setAppChoice] = useState<FigureType>("");

  const startNewRound = () => {
    setUserChoice("");
    setAppChoice("");
  };

  return (
    <AppContext.Provider
      value={{
        userChoice,
        setUserChoice,
        appChoice,
        setAppChoice,
        score,
        setScore,
        startNewRound,
      }}
    >
      <div className="content">
        <div className="container">
          <ScoreBoard></ScoreBoard>
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
