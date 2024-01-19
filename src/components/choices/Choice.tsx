import { choices } from "./ChoicesInitial";

export function Choice(props: { type: choices }) {
  return <div className={`circle-child ${props.type} background`}></div>;
}
