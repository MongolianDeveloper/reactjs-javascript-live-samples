import React, { useState } from "react";

export type BuggyCounterProps = {};
export const BuggyCounter: React.FC<BuggyCounterProps> = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((value) => value + 1);
  };

  if (counter === 5) {
    throw new Error("Crashed!");
  }

  return <h1 onClick={handleClick}>{counter}</h1>;
};

export default BuggyCounter;
