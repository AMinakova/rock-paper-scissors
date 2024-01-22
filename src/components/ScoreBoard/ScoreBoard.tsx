import { useContext } from "react";
import logo from "../../assets/logo.svg";
import styles from "./ScoreBoard.module.css";
import { AppContext } from "../../AppContext";

export function ScoreBoard() {
  const { score } = useContext(AppContext);
  return (
    <div className={styles.scoreContainer}>
      <img src={logo} alt="Logo" id={styles.logo} />
      <div className={styles.scoreLabel}>
        <p>SCORE</p>
        <p className={styles.count}>{score}</p>
      </div>
    </div>
  );
}
