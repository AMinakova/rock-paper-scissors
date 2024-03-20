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
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    if (props.addAnimation) {
      setShowAnimation(true);
      console.log("in useEffect of an Figure!!");
      const timeout = setTimeout(() => setShowAnimation(false), 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <div>
      {showAnimation ? (
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
