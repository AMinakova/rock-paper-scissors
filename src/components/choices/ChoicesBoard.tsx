import { useContext, useEffect, useState } from "react";
import { AppContext, Choices } from "../../AppContext";
import { Figure } from "../figure/Figure";
import "./Choices.css";

const figures = ["rock", "scissors", "paper"];
export type FigureTypes = (typeof figures)[number];

export function ChoicesBoard() {
  const [appChoice, setAppChoice] = useState<Choices>(null);

  useEffect(() => {
    setTimeout(() => {
      setAppChoice(getRandomAppChoice());
    }, 1000);
  }, []);
  const getFigureButton = (type: FigureTypes) => (
    <button className="figure-button" key={type} value={type}>
      <Figure type={type} />
    </button>
  );
  const { userChoice } = useContext(AppContext);
  const getRandomAppChoice = () => {
    const randomIndex: number = Math.floor(Math.random() * figures.length);
    return figures[randomIndex];
  };
  return (
    <div className="choices-board">
      {getFigureButton(userChoice as FigureTypes)}
      {appChoice && getFigureButton(appChoice)}
    </div>
  );
}
