import image from "../../assets/image-rules.svg";
import close from "../../assets/icon-close.svg";
import styles from "./Rules.module.css";
import { useEffect } from "react";

export function RulesComponent(props: { closeModal: () => void }) {
  useEffect(() => {
    const img = new Image();
    img.src = image;
  }, []);
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalHeader}>
        <header>RULES</header>
        <button className={styles.button} onClick={() => props.closeModal()}>
          <img src={close}></img>
        </button>
      </div>
      <img className={styles.background} src={image}></img>
    </div>
  );
}
