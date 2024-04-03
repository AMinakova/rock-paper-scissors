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
  const animated = props.addAnimation;
  return (
    <div>
      {props.addAnimation ? (
        <div className={`circle-parent ${props.size} empty`}></div>
      ) : (
        <div
          className={`circle-parent ${props.type}-color ${props.size}`}
          id={props.addHighlight ? "highlight" : ""}
        >
          {/* <div
            className={`circle-child ${props.type} background ${props.size}${
              animated && " pop"
            }`}
          /> */}
          <div
            className={`circle-child ${props.type} background ${props.size} pop
            `}
          />
        </div>
      )}
    </div>
  );
}
