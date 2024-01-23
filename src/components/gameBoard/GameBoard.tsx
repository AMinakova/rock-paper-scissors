import { useContext } from "react";
import { Figure, FigureType } from "../figure/Figure";
import "./OptionsBoard.css";
import { AppContext } from "../../AppContext";

export function GameBoard() {
  const { setUserChoice } = useContext(AppContext);
  const getFigureButton = (type: FigureType) => (
    <button
      className="figure-button"
      key={type}
      value={type}
      onClick={(e) => setUserChoice(e.currentTarget.value as FigureType)}
    >
      <Figure type={type} size="m" />
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
