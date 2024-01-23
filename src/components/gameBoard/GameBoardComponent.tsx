import { useContext } from "react";
import { FigureComponent, FigureType } from "../figure/FigureComponent";
import "./GameBoard.css";
import { AppContext } from "../../AppContext";

export function GameBoardComponent() {
  const { setUserChoice } = useContext(AppContext);
  const getFigureButton = (type: FigureType) => (
    <button
      className="figure-button"
      key={type}
      value={type}
      onClick={(e) => setUserChoice(e.currentTarget.value as FigureType)}
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
