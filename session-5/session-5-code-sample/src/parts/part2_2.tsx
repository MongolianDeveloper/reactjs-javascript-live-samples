import { useReducer } from "react";

// 2. useReducer болон useState **(useReducer vs useState)**
//    - Энгийн болон объект өгөгдлийг акшинаар өөрчлөх **(Simple vs complex state transitions with hooks)**

const initialState = 0;

type Action =
  | { type: "increment_or_decrement"; payload: number }
  | { type: "reset" };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment_or_decrement":
      return state + action.payload;
    case "reset":
      return 0;
    default:
      throw new Error();
  }
}

export default function Part2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncreaseOrDecrement = (value: number) => {
    dispatch({ type: "increment_or_decrement", payload: value });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      Count: {count}
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleIncreaseOrDecrement(-2)}>-</button>
      <button onClick={() => handleIncreaseOrDecrement(2)}>+</button>
    </>
  );
}
