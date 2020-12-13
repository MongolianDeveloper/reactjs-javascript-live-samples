import React, { useState } from "react";

// 1. Callback гэж ву вэ **(What is a Callback?)**

const ItemComponent: React.FC<{ click: () => void; count: number }> = ({
  click,
  count,
}) => {
  return (
    <div style={{ cursor: "pointer", padding: "20px" }} onClick={click}>
      {count}
    </div>
  );
};

export default function Part1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ItemComponent
        click={() => setCount((value) => value + 1)}
        count={count}
      />
    </div>
  );
}
