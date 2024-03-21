import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { FigureComponent } from "../figure/FigureComponent";
import styles from "./DecisionsBoard.module.css";

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

export function DecisionsBoardComponent() {
  const [result, setResult] = useState<Result | undefined>();
  const [showResult, setShowResult] = useState<boolean>(false);
  const [addFigureAnimation, setAddFigureAnimation] = useState<boolean>(true);
  const { userChoice, appChoice, score, setScore, startNewRound } =
    useContext(AppContext);

  useEffect(() => {
    console.log("inUseEffect for animation");
    setTimeout(() => {
      setAddFigureAnimation(false);
      setTimeout(() => {
        result !== "DRAW" && setScore(result === "WIN" ? score + 1 : score - 1);

        setShowResult(true);
      }, 2000);
    }, 3500);
  }, [result]);

  useEffect(() => {
    console.log("inUseEffect, that should run once");
    defineResult();
  }, [userChoice]);

  const defineResult = () => {
    console.log("current score: ", score);
    var result: Result = Result.DRAW;
    console.log("appChoice: ", appChoice);
    console.log("userChoice: ", userChoice);

    if (appChoice !== userChoice) {
      result = winOptions[userChoice] === appChoice ? Result.WIN : Result.LOSE;
      console.log("result ", result);
    }
    setResult(result);
  };

  const resultComponent = (
    <div className={styles.resultContainer}>
      <p className="font-extra-spacing">
        {result !== Result.DRAW && `YOU ${result}`}
      </p>
      <button
        className={`font-extra-spacing ${styles.playAgainButton}`}
        onClick={() => startNewRound()}
      >
        PLAY AGAIN
      </button>
    </div>
  );

  return (
    <div className={styles.decisionsBoard}>
      <div className={styles.playerDecision}>
        <p className="font-extra-spacing">YOU PICKED</p>
        <FigureComponent
          type={userChoice}
          size="l"
          addHighlight={result === Result.WIN}
        />
      </div>
      {!!showResult && resultComponent}
      <div className={styles.playerDecision}>
        <p className="font-extra-spacing">THE HOUSE PICKED</p>
        {!!appChoice && (
          <FigureComponent
            type={appChoice}
            size="l"
            addHighlight={result === Result.LOSE}
            addAnimation={addFigureAnimation}
          />
        )}
      </div>
    </div>
  );
}
