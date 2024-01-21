import { useContext } from "react";
import { OptionsBoard } from "../OptionsBoard/OptionsBoard";
import { AppContext } from "../../AppContext";
import { DecisionsBoard } from "../choices/DecisionsBoard";

export function ChoicesDashboard() {
  const { userChoice } = useContext(AppContext);

  return userChoice ? <DecisionsBoard /> : <OptionsBoard />;
}
