import { Choice } from "./Choice";
import "./Choices.css";

export type choices = "rock" | "scissors" | "paper";

export function ChoicesInitial(props: {
  handleChoice: (value: string) => void;
}) {
  const getChoiceButton = (type: choices) => (
    <button
      key={type}
      value={type}
      className={`circle-parent ${type}-color`}
      onClick={(e) => props.handleChoice(e.currentTarget.value)}
    >
      <Choice type={type} />
    </button>
  );
  return (
    <div className="choices-initial">
      <div>
        {getChoiceButton("paper")}
        {getChoiceButton("scissors")}
      </div>
      {getChoiceButton("rock")}
    </div>
  );
}
