import React, { useEffect, useState } from "react";

// 2. useEffect болон Lifecycle функцууд **(useEffect vs Lifecycle methods)**
// - Clean up функц шаардлагагүй react компонент **(useEffect without cleanup)**

export const Part2: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Part2;
