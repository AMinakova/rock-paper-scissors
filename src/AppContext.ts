import { Dispatch, SetStateAction, createContext } from "react";
import { FigureType } from "./components/figure/FigureComponent";

export type Context = {
  userChoice: FigureType;
  setUserChoice: Dispatch<SetStateAction<FigureType>>;
  appChoice: FigureType;
  setAppChoice: Dispatch<SetStateAction<FigureType>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  startNewRound: Function;
};

const initialContext: Context = {
  userChoice: "",
  setUserChoice: (): void => {},
  appChoice: "",
  setAppChoice: (): void => {},
  score: 0,
  setScore: (): void => {},
  startNewRound: (): void => {},
};

export const AppContext = createContext<Context>(initialContext);
