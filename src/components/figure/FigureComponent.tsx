import "./Figure.scss";

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
        <div className={`circle-empty`}></div>
      ) : (
        <div
          className={`circle-${props.size} ${props.type}-color`}
          id={props.addHighlight ? "highlight" : ""}
        >
          <div
            className={`overlay-${props.size} ${props.type} appear-${props.size}`}
          />
        </div>
      )}
    </div>
  );
}
