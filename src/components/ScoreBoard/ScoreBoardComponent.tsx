import { useContext } from "react";
import logo from "../../assets/logo.svg";
import styles from "./ScoreBoard.module.css";
import { AppContext } from "../../AppContext";

export function ScoreBoardComponent() {
  const { score } = useContext(AppContext);
  return (
    <div className={styles.scoreContainer}>
      <img src={logo} alt="Logo" id={styles.logo} />
      <div className={styles.scoreLabel}>
        <div className="font-extra-spacing">SCORE</div>
        <div className={styles.count}>{score}</div>
      </div>
    </div>
  );
}
