import { Dispatch, SetStateAction, createContext } from "react";
import { FigureTypes } from "./components/choices/DecisionsBoard";

export type Choices = FigureTypes | null;

export type Context = {
  userChoice: Choices;
  setUserChoice: Dispatch<SetStateAction<Choices>>;
  appChoice: Choices;
  setAppChoice: Dispatch<SetStateAction<Choices>>;
};

export const initialContext: Context = {
  userChoice: null,
  setUserChoice: (): void => {},
  appChoice: null,
  setAppChoice: (): void => {},
};

export const AppContext = createContext<Context>(initialContext);
