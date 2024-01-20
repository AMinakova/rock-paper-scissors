import { useContext } from "react";
import { InitialBoard } from "../InitialBoard/InitialBoard";
import { AppContext } from "../../AppContext";
import { Choices } from "../choices/Choices";

export function ChoicesDashboard() {
  const { userChoice } = useContext(AppContext);

  return userChoice ? <Choices /> : <InitialBoard />;
}
