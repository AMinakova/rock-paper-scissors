import { figures } from "../InitialBoard/InitialBoard";
import { Figure } from "../figure/Figure";
import "./Choices.css";

export function Choices() {
  const getFigureButton = (type: figures) => (
    <button className="figure-button" key={type} value={type}>
      <Figure type={type} />
    </button>
  );
  const userChoice = "rock";
  const appChoice = "paper";

  return (
    <div className="choices-board">
      {getFigureButton(userChoice)}
      {getFigureButton(appChoice)}
    </div>
  );
}
