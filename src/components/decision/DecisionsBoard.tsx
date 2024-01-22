import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { Figure, FigureType, figures } from "../figure/Figure";
import styles from "./DecisionsBoard.module.css";

const winOptions: Record<string, string> = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

export function DecisionsBoard() {
  const [appChoice, setAppChoice] = useState<FigureType>();
  const [win, setWin] = useState<boolean | null>();

  useEffect(() => {
    var randomFigure = getRandomFigure();
    //wait to show animation of dummy decision
    setTimeout(() => {
      setAppChoice(randomFigure);
    }, 3000);

    //define the winner
    const currentWin = winOptions[userChoice] === randomFigure ? true : false;
    setWin(currentWin);
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
        <Figure type={userChoice} size="l" />
      </div>
      <div>
        <p>THE HOUSE PICKED</p>
        {appChoice ? (
          <Figure type={appChoice} size="l" />
        ) : (
          <div className={styles.decisionDummy}></div>
        )}
      </div>
    </div>
  );
}
