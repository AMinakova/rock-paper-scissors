import "./Choices.css";

type choices = "rock" | "scissors" | "paper";

export function ChoicesDashboard(props: {
  handleChoice: (value: string) => void;
}) {
  const showChoiceButton = (type: choices) => {
    return (
      <button
        key={type}
        value={type}
        className={`circle-parent ${type}-color`}
        onClick={(e) => props.handleChoice(e.currentTarget.value)}
      >
        <div className={`circle-child ${type} background`}></div>
      </button>
    );
  };
  return (
    <div className="choices">
      {showChoiceButton("paper")}
      {showChoiceButton("scissors")}
      {showChoiceButton("rock")}
    </div>
  );
}
