import { useState } from "react";
import "./App.css";
import { ScoreSummary } from "./components/ScoreSummary";
import { ChoicesDashboard } from "./components/ChoicesDashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScoreSummary count={count}></ScoreSummary>
      <ChoicesDashboard></ChoicesDashboard>
    </>
  );
}

export default App;
