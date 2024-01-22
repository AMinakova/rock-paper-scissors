import { Dispatch, SetStateAction, createContext } from "react";
import { FigureType } from "./components/figure/Figure";

export type Context = {
  userChoice: FigureType;
  setUserChoice: Dispatch<SetStateAction<FigureType>>;
  appChoice: FigureType;
  setAppChoice: Dispatch<SetStateAction<FigureType>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
};

export const initialContext: Context = {
  userChoice: "",
  setUserChoice: (): void => {},
  appChoice: "",
  setAppChoice: (): void => {},
  score: 0,
  setScore: (): void => {},
};

export const AppContext = createContext<Context>(initialContext);
