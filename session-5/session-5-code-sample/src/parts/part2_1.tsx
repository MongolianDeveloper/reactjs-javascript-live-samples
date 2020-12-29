import { useReducer } from "react";

// 2. useReducer болон useState **(useReducer vs useState)**
//    - Энгийн болон объект өгөгдөл хадгалах **(Simple vs complex state with hooks)**

const initialState = 0;

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error();
  }
}

export default function Part2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrease = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      Count: {count}
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </>
  );
}
