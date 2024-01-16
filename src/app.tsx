import { useState } from "react";
import "./App.css";
import { ScoreSummary } from "./components/ScoreSummary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScoreSummary count={count}></ScoreSummary>
    </>
  );
}

export default App;
