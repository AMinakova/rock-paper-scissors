import "./Choices.css";
import { ChoicesInitial } from "./ChoicesInitial";

type choices = "rock" | "scissors" | "paper";

export function ChoicesDashboard(props: {
  handleChoice: (value: string) => void;
}) {
  return (
    <ChoicesInitial
      handleChoice={function (value: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
