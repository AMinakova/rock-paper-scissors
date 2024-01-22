import { useEffect } from "react";
import "./Figure.css";

export const figures = ["rock", "scissors", "paper"];
export type FigureType = (typeof figures)[number];
export type FigureSize = "s" | "m" | "l";

export function Figure(props: { type: FigureType; size: FigureSize }) {
  return (
    <div className={`circle-parent ${props.type}-color ${props.size}`}>
      <div className={`circle-child ${props.type} background ${props.size}`} />
    </div>
  );
}
