import { useState } from "react";

// 1. Хэзээ useReducer-г хэрэглэх вэ **(When to use useReducer?)**

const initialCount = 0;

export default function Part1() {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}
