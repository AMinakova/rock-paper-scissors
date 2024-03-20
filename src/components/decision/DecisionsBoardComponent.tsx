import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";
import { FigureComponent } from "../figure/FigureComponent";
import styles from "./DecisionsBoard.module.css";

const winOptions: Record<string, string> = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};

type Result = "LOSE" | "WIN" | "DRAW";

export function DecisionsBoardComponent() {
  const [gameResult, setResult] = useState<Result | undefined>();
  const { userChoice, appChoice, score, setScore, startNewRound } =
    useContext(AppContext);

  useEffect(() => {
    console.log("inUseEffect of decisionBoard");
    setTimeout(() => updateScore(), 3000);
  }, [appChoice]);

  const updateScore = () => {
    console.log("current score: ", score);
    var result: Result = "DRAW";
    console.log("appChoice: ", appChoice);
    console.log("userChoice: ", userChoice);

    if (appChoice !== userChoice) {
      console.log("is in if ");
      result = winOptions[userChoice] === appChoice ? "WIN" : "LOSE";
      console.log("result ", result);

      setScore(result === "WIN" ? score + 1 : score - 1);
    }
    setResult(result);
  };

  const showResult = () => (
    <div className={styles.resultContainer}>
      <p className="font-extra-spacing">
        {gameResult !== "DRAW" && "YOU "} {gameResult}
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
          addHighlight={gameResult === "WIN"}
        />
      </div>
      {!!gameResult && showResult()}
      <div className={styles.playerDecision}>
        <p className="font-extra-spacing">THE HOUSE PICKED</p>
        {!!appChoice && (
          <FigureComponent
            type={appChoice}
            size="l"
            addHighlight={gameResult === "LOSE"}
            addAnimation={true}
          />
        )}
      </div>
    </div>
  );
}
