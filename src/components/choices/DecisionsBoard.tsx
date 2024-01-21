import { useContext, useEffect, useState } from "react";
import { AppContext, Choices } from "../../AppContext";
import { Figure } from "../figure/Figure";
import styles from "./style.module.css";

const figures = ["rock", "scissors", "paper"];
export type FigureTypes = (typeof figures)[number];

export function DecisionsBoard() {
  const [appChoice, setAppChoice] = useState<Choices>();

  useEffect(() => {
    setTimeout(() => {
      setAppChoice(getRandomFigure() as Choices);
    }, 1000);
  }, []);

  const { userChoice } = useContext(AppContext);

  const getRandomFigure = () => {
    const randomIndex: number = Math.floor(Math.random() * figures.length);
    return figures[randomIndex];
  };

  return (
    <div className={styles.decisionsBoard}>
      <div>
        <p>YOU PICKED</p>
        <Figure type={userChoice as FigureTypes} />
      </div>
      <div>
        <p>A HOUSE PICKED</p>
        <Figure type={appChoice as FigureTypes} />
      </div>
    </div>
  );
}
