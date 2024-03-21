import { useEffect, useState } from "react";
import "./Figure.css";

export const figures = ["rock", "scissors", "paper"];
export type FigureType = (typeof figures)[number];
export type FigureSize = "m" | "l";

export function FigureComponent(props: {
  type: FigureType;
  size: FigureSize;
  addHighlight?: boolean;
  addAnimation?: boolean;
}) {
  return (
    <div>
      {props.addAnimation ? (
        <div className="circle-parent empty"></div>
      ) : (
        <div
          className={`circle-parent ${props.type}-color ${props.size}${
            props.addHighlight ? " highlight" : ""
          }`}
        >
          <div
            className={`circle-child ${props.type} background ${props.size}`}
          />
        </div>
      )}
    </div>
  );
}
