import image from "../../assets/image-rules.svg";
import close from "../../assets/icon-close.svg";
import styles from "./Rules.module.css";

export function RulesComponent(props: { closeModal: () => void }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <h2>RULES</h2>
        <button className={styles.button} onClick={() => props.closeModal()}>
          <img src={close}></img>
        </button>
      </div>
      <img className={styles.background} src={image}></img>
    </div>
  );
}
