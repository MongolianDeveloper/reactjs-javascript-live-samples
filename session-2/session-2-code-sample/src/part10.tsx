import React, { useEffect, useLayoutEffect, useState } from "react";

// 10. useEffect болон useLayoutEffect **(useEffect vs useLayoutEffect)**

export default function Part10() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("USE EFFECT 2");
  });

  useEffect(() => {
    console.log("USE EFFECT 1");
  });

  useLayoutEffect(() => {
    console.log("USE LAYOUT ");
    // 1 minutes data fetch api
  });

  // 1. Render -> Browser has paint UI -> useEffect -> data -> render -> Browser has paint UI
  // 2. Render -> useLayoutEffect -> Browser has paint UI -> useEffect
  // window resize event -> hide/show component in mobile -> useLayoutEffect

  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Update Count
        </button>
      </h2>
    </div>
  );
}
