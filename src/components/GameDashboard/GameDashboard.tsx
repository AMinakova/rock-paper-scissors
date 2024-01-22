import { useContext } from "react";
import { OptionsBoard } from "../OptionsBoard/OptionsBoard";
import { AppContext } from "../../AppContext";
import { DecisionsBoard } from "../decision/DecisionsBoard";

export function GameDashboard() {
  const { userChoice } = useContext(AppContext);

  return userChoice ? <DecisionsBoard /> : <OptionsBoard />;
}
