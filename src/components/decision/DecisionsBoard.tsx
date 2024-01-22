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
  const [userWin, setWin] = useState<boolean | null>();
  const { userChoice, score, setScore, startNewRound } = useContext(AppContext);

  useEffect(() => {
    var randomAppChoice = getRandomFigure();
    setTimeout(() => {
      setAppChoice(randomAppChoice);
      updateScore(randomAppChoice);
    }, 3000);
  }, []);

  const getRandomFigure = () => {
    const randomIndex: number = Math.floor(Math.random() * figures.length);
    return figures[randomIndex];
  };
  const updateScore = (appChoice: FigureType) => {
    if (appChoice !== userChoice) {
      var userWon = winOptions[userChoice] === appChoice ? true : false;
      setWin(userWon);
      setScore(userWon ? score + 1 : score - 1);
    }
  };
  const showResult = () => (
    <div className={styles.resultContainer}>
      <p>YOU {userWin ? "WIN" : "LOSE"}</p>
      <button onClick={() => startNewRound()}>PLAY AGAIN</button>
    </div>
  );

  return (
    <div className={styles.decisionsBoard}>
      <div>
        <p>YOU PICKED</p>
        <Figure type={userChoice} size="l" />
      </div>
      {userWin != null && showResult()}
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
