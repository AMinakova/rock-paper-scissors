import { InitialBoard } from "../InitialBoard/InitialBoard";

type choices = "rock" | "scissors" | "paper";

export function ChoicesDashboard(props: {
  handleChoice: (value: string) => void;
}) {
  return (
    <InitialBoard
      handleChoice={function (value: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
