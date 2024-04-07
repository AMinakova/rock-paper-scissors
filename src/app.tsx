import { useEffect, useState } from "react";
import "./App.css";
import { ScoreBoardComponent } from "./components/scoreBoard/ScoreBoardComponent";
import { AppContext } from "./AppContext";
import { FigureType } from "./components/figure/FigureComponent";
import { ResultBoardComponent } from "./components/result/ResultBoardComponent";
import { StartBoardComponent } from "./components/gameBoard/StartBoardComponent";
import Modal from "react-modal";
import { RulesComponent } from "./components/rules/RulesComponent";

Modal.setAppElement("#root");
function App() {
  const [score, setScore] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<FigureType>("");
  const [appChoice, setAppChoice] = useState<FigureType>("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
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
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="container">
          <ScoreBoardComponent />
          {userChoice ? <ResultBoardComponent /> : <StartBoardComponent />}
          <button className="transparent" onClick={openModal}>
            <p>RULES</p>
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              overlay: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.35)",
              },
              content: {
                position: "absolute",
                display: "flex",
                border: "1px solid #ccc",
                background: "white",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "10px",
                outline: "none",
                padding: "30px",
                inset: "auto",
              },
            }}
          >
            <RulesComponent closeModal={closeModal}></RulesComponent>
          </Modal>
        </div>
      )}
    </AppContext.Provider>
  );
}

export default App;
