import { useEffect } from "react";
import "./Figure.css";

export const figures = ["rock", "scissors", "paper"];
export type FigureTypes = (typeof figures)[number];
export type FigureSize = "s" | "m" | "l";

export function Figure(props: { type: FigureTypes; size: FigureSize }) {
  return (
    <div className={`circle-parent ${props.type}-color ${props.size}`}>
      <div className={`circle-child ${props.type} background ${props.size}`} />
    </div>
  );
}
