import rockLogo from "../assets/icon-rock.svg";
import scissorsLogo from "../assets/icon-scissors.svg";
import paperLogo from "../assets/icon-paper.svg";

type choices = "rock" | "scissors" | "paper";
const choicesLogos = {
  rock: rockLogo,
  scissors: scissorsLogo,
  paper: paperLogo,
};
export function ChoicesDashboard(props: {
  makeChoice: (value: string) => void;
}) {
  const showChoiceButton = (type: choices) => {
    return (
      <button
        className={`circle-parent ${type}-color`}
        onClick={(value) => props.makeChoice("bla")}
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
