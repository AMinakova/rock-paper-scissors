import { useContext, useEffect, useState } from "react";
import { AppContext, Choices } from "../../AppContext";
import { Figure, FigureTypes, figures } from "../figure/Figure";
import styles from "./DecisionsBoard.module.css";

export function DecisionsBoard() {
  const [appChoice, setAppChoice] = useState<Choices>();

  useEffect(() => {
    setTimeout(() => {
      setAppChoice(getRandomFigure() as Choices);
    }, 3000);
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
        <Figure type={userChoice as FigureTypes} size="l" />
      </div>
      <div>
        <p>THE HOUSE PICKED</p>
        {appChoice ? (
          <Figure type={appChoice as FigureTypes} size="l" />
        ) : (
          <div className={styles.decisionDummy}></div>
        )}
      </div>
    </div>
  );
}
