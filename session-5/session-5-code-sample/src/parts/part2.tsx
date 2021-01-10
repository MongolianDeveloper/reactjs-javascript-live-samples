import { useReducer } from "react";

// 2. useReducer болон useState **(useReducer vs useState)**
//    - Энгийн болон объект өгөгдөл хадгалах **(Simple (primitive) vs complex state with hooks)**
//    - Энгийн болон объект өгөгдлийг акшинаар өөрчлөх **(Simple (primitive) vs complex state transitions with hooks)**

const initialState = 0;

type Action =
  | { type: "increment"; payload: { value: number } }
  | { type: "decrement"; payload: { value: number } }
  | { type: "reset" };
type State = {
  count: number;
};

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.payload.value;
    case "decrement":
      return state - action.payload.value;
    case "reset":
      return 0;
    default:
      throw new Error();
  }
}

export default function Part2() {
  // const [count, setCount] = useState(initialCount);
  const [count, dispatch] = useReducer(reducer, initialState);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncrement = (value: number) => {
    dispatch({ type: "decrement", payload: { value: 2 } });
  };

  const handleDecrement = (value: number) => {
    dispatch({ type: "increment", payload: { value: 2 } });
  };

  return (
    <>
      Count: {count}
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => handleIncrement(2)}>-</button>
      <button onClick={() => handleDecrement(2)}>+</button>
    </>
  );
}
