import { useContext } from "react";
import { Figure } from "../figure/Figure";
import "./InitialBoard.css";
import { AppContext } from "../../AppContext";
import { FigureTypes } from "../choices/ChoicesBoard";

export function InitialBoard() {
  const { setUserChoice } = useContext(AppContext);
  const getFigureButton = (type: FigureTypes) => (
    <button
      className="figure-button"
      key={type}
      value={type}
      onClick={(e) => setUserChoice(e.currentTarget.value as FigureTypes)}
    >
      <Figure type={type} />
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
