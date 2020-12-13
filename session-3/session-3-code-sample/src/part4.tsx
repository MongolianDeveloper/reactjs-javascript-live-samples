import React, { useCallback, useState } from "react";

// - Шаардлагагүй render **(Unnecessary re-render.)**

type PropsType = {
  onClick: () => void;
  count: number;
  memo?: boolean;
  name: string;
};

export const CountButton = ({ onClick, count, memo, name }: PropsType) => {
  console.log(
    `${
      memo ? "<MemoizedCountButton>" : "<CountButton>"
    } rendered, name: ${name}`
  );
  return (
    <button style={{ padding: "20px", margin: "10px" }} onClick={onClick}>
      {count}
    </button>
  );
};

const MemoizedCountButton = React.memo(CountButton);

export default function Part4() {
  // const [count1, setCount1] = useState(0);
  // inline func
  // const increment1 = () => setCount1((c) => c + 1);

  // const [count2, setCount2] = useState(0);
  // inline func
  // const increment2 = () => setCount2((c) => c + 1);

  const [count1, setCount1] = useState(0);
  const increment1 = useCallback(() => setCount1((c) => c + 1), []);
  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => setCount2((c) => c + 1), []);

  return (
    <>
      <MemoizedCountButton
        count={count1}
        onClick={increment1}
        memo
        name="Button 1"
      />
      <MemoizedCountButton
        count={count2}
        onClick={increment2}
        memo
        name="Button 2"
      />
    </>
  );
}
