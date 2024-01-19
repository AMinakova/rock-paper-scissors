import { figures } from "../InitialBoard/InitialBoard";
import "./Figure.css";

export function Figure(props: { type: figures }) {
  return (
    <div className={`circle-parent ${props.type}-color`}>
      <div className={`circle-child ${props.type} background`} />
    </div>
  );
}
