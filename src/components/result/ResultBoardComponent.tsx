import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { FigureComponent } from "../figure/FigureComponent";
import styles from "./ResultBoard.module.css";

const winOptions: Record<string, string> = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

enum Result {
  LOSE = "LOSE",
  WIN = "WIN",
  DRAW = "DRAW",
}

export function ResultBoardComponent() {
  const [animateFigure, setAnimateFigure] = useState<boolean>(true);
  const [roundResult, setRoundResult] = useState<Result | undefined>(undefined);
  const { userChoice, appChoice, score, setScore, startNewRound } =
    useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setAnimateFigure(!animateFigure);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!animateFigure) {
      setTimeout(() => {
        const result = defineResult();
        result !== Result.DRAW &&
          setScore(result === Result.WIN ? score + 1 : score - 1);
        setRoundResult(result);
      }, 2000);
    }
  }, [animateFigure]);

  const defineResult = () => {
    var result: Result = Result.DRAW;
    if (appChoice !== userChoice) {
      result = winOptions[userChoice] === appChoice ? Result.WIN : Result.LOSE;
    }
    return result;
  };

  const summaryComponent = (
    <div className={styles.resultContainer}>
      <p>
        {roundResult !== Result.DRAW && "YOU "} {roundResult}
      </p>
      <button
        className={styles.playAgainButton}
        onClick={() => startNewRound()}
      >
        PLAY AGAIN
      </button>
    </div>
  );

  return (
    <div className={styles.decisionsBoard}>
      <div className={styles.playerDecision}>
        <p>YOU PICKED</p>
        <FigureComponent
          type={userChoice}
          size="l"
          addHighlight={roundResult === Result.WIN}
        />
      </div>
      {!!roundResult && summaryComponent}
      <div className={styles.playerDecision}>
        <p>THE HOUSE PICKED</p>
        {!!appChoice && (
          <FigureComponent
            type={appChoice}
            size="l"
            addHighlight={roundResult === Result.LOSE}
            addAnimation={animateFigure}
          />
        )}
      </div>
    </div>
  );
}
