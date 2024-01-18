import logo from "../assets/logo.svg";

export function ScoreBoard(props: { count: number }) {
  return (
    <div className="score-board">
      <img src={logo} alt="Logo" />
      <div className="score-label">
        <p>SCORE</p>
        <p>{props.count}</p>
      </div>
    </div>
  );
}
