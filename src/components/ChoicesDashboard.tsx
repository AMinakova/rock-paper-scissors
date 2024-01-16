import rockLogo from "../assets/icon-rock.svg";
import scissorsLogo from "../assets/icon-scissors.svg";
import paperLogo from "../assets/icon-paper.svg";

type choices = "rock" | "scissors" | "paper";
const choicesLogos = {
  rock: rockLogo,
  scissors: scissorsLogo,
  paper: paperLogo,
};
export function ChoicesDashboard() {
  const choiceView = (type: choices) => {
    return (
      <div className="circle">
        <img src={choicesLogos[type]} alt="type"></img>
      </div>
    );
  };
  return (
    <div className="choices">
      <div>{choiceView("rock")}</div>
      <div></div>
    </div>
  );
}
