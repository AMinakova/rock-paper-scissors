import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { Figure, FigureType, figures } from "../figure/Figure";
import styles from "./DecisionsBoard.module.css";

const winOptions: Record<string, string> = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

type Result = "LOSE" | "WIN" | "DRAW";

export function DecisionsBoard() {
  const [appChoice, setAppChoice] = useState<FigureType>();
  const [gameResult, setResult] = useState<Result | undefined>();
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

  const updateScore = (randomChoice: FigureType) => {
    var result = "DRAW";
    if (randomChoice !== userChoice) {
      result = winOptions[userChoice] === randomChoice ? "WIN" : "LOSE";
      setScore(result === "WIN" ? score + 1 : score - 1);
    }
    setResult(result as Result);
  };

  const showResult = () => (
    <div className={styles.resultContainer}>
      <p>
        {gameResult !== "DRAW" && "YOU "} {gameResult}
      </p>
      <button onClick={() => startNewRound()}>PLAY AGAIN</button>
    </div>
  );
  return (
    <div className={styles.decisionsBoard}>
      <div>
        <p>YOU PICKED</p>
        <Figure type={userChoice} size="l" />
      </div>
      {!!gameResult && showResult()}
      <div>
        <p>THE HOUSE PICKED</p>
        {appChoice ? (
          <Figure type={appChoice} size="l" />
        ) : (
          <div className={styles.decisionAnimation}></div>
        )}
      </div>
    </div>
  );
}
