import { useReducer } from "react";

// 1. Хэзээ useReducer-г хэрэглэх вэ **(When to use useReducer?)**

const initialState = { count: 0 };

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };
type State = {
  count: number;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

export default function Part1() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
