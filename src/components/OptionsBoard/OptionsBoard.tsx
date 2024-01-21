import { useContext } from "react";
import { Figure } from "../figure/Figure";
import "./OptionsBoard.css";
import { AppContext } from "../../AppContext";
import { FigureTypes } from "../choices/DecisionsBoard";

export function OptionsBoard() {
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