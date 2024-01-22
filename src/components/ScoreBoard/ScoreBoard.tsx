import logo from "../../assets/logo.svg";
import styles from "./ScoreBoard.module.css";

export function ScoreBoard(props: { count: number }) {
  return (
    <div className={styles.scoreContainer}>
      <img src={logo} alt="Logo" id={styles.logo} />
      <div className={styles.scoreLabel}>
        <p>SCORE</p>
        <p className={styles.count}>{props.count}</p>
      </div>
    </div>
  );
}
