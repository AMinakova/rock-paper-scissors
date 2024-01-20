import { FigureTypes } from "../choices/ChoicesBoard";
import "./Figure.css";

export function Figure(props: { type: FigureTypes }) {
  return (
    <div className={`circle-parent ${props.type}-color`}>
      <div className={`circle-child ${props.type} background`} />
    </div>
  );
}
