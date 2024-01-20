import { useContext } from "react";
import { InitialBoard } from "../InitialBoard/InitialBoard";
import { AppContext } from "../../AppContext";
import { ChoicesBoard } from "../choices/ChoicesBoard";

export function ChoicesDashboard() {
  const { userChoice } = useContext(AppContext);

  return userChoice ? <ChoicesBoard /> : <InitialBoard />;
}
