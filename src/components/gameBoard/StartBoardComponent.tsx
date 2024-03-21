import { useContext } from "react";
import {
  FigureComponent,
  FigureType,
  figures,
} from "../figure/FigureComponent";
import "./StartBoard.css";
import { AppContext } from "../../AppContext";

export function StartBoardComponent() {
  const { setUserChoice, setAppChoice } = useContext(AppContext);

  const startNewRound = (value: FigureType) => {
    setUserChoice(value);
    let randomIndex: number = Math.floor(Math.random() * figures.length);
    setAppChoice(figures[randomIndex]);
  };

  const getFigureButton = (type: FigureType) => (
    <button
      className="figure-button"
      key={type}
      value={type}
      onClick={(e) => startNewRound(e.currentTarget.value as FigureType)}
    >
      <FigureComponent type={type} size="m" />
    </button>
  );
  return (
    <div className="game-initial">
      <div>
        {getFigureButton("paper")}
        {getFigureButton("scissors")}
      </div>
      {getFigureButton("rock")}
    </div>
  );
}
