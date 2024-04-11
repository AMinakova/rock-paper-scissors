import { useContext } from "react";
import logo from "../../assets/logo.svg";
import styles from "./ScoreBoard.module.css";
import { AppContext } from "../../AppContext";

export function ScoreBoardComponent() {
  const { score } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <div id={styles.logoContainer}>
        <img src={logo} alt="Logo" id={styles.logo} />
      </div>
      <div className={styles.label}>
        <div>SCORE</div>
        <div className={styles.count}>{score}</div>
      </div>
    </div>
  );
}
