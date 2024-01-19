import { Figure } from "../figure/Figure";
import "./Choices.css";

export type figures = "rock" | "scissors" | "paper";

export function InitialBoard(props: { handleChoice: (value: string) => void }) {
  const getFigureButton = (type: figures) => (
    <button
      className="figure-button"
      key={type}
      value={type}
      onClick={(e) => props.handleChoice(e.currentTarget.value)}
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
