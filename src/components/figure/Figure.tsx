import { FigureTypes } from "../choices/DecisionsBoard";
import "./Figure.css";

export function Figure(props: { type: FigureTypes | undefined }) {
  const style = props.type ? props.type : "empty";
  return (
    <div className={`circle-parent ${style}-color`}>
      <div className={`circle-child ${style} background`} />
    </div>
  );
}
