import { useEffect, useState } from "react";
import "./App.css";
import { ScoreBoardComponent } from "./components/scoreBoard/ScoreBoardComponent";
import { AppContext } from "./AppContext";
import { FigureType } from "./components/figure/FigureComponent";
import { DecisionsBoardComponent } from "./components/decision/DecisionsBoardComponent";
import { GameBoardComponent } from "./components/gameBoard/GameBoardComponent";
import Modal from "react-modal";
import { RulesComponent } from "./components/rules/RulesComponent";

Modal.setAppElement("#root");
function App() {
  const [score, setScore] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<FigureType>("");
  const [appChoice, setAppChoice] = useState<FigureType>("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const startNewRound = () => {
    setUserChoice("");
    setAppChoice("");
  };

  return (
    <AppContext.Provider
      value={{
        userChoice,
        setUserChoice,
        appChoice,
        setAppChoice,
        score,
        setScore,
        startNewRound,
      }}
    >
      <div className="content">
        <div className="container">
          <ScoreBoardComponent></ScoreBoardComponent>
          {userChoice ? <DecisionsBoardComponent /> : <GameBoardComponent />}
        </div>
        <button className="transparent font-extra-spacing" onClick={openModal}>
          <p>RULES</p>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.35)",
            },
            content: {
              position: "absolute",
              top: "25vh",
              left: "30vw",
              right: "30vw",
              bottom: "25vh",
              border: "1px solid #ccc",
              background: "white",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
            },
          }}
        >
          <RulesComponent closeModal={closeModal}></RulesComponent>
        </Modal>
      </div>
    </AppContext.Provider>
  );
}

export default App;
