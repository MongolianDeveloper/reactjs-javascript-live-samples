import React, { useCallback, useMemo, useState } from "react";

// 2. Хэзээ useCallback-г ашиглах вэ **(When is useCallback helpful?)**
//    - useCallback syntax **(useCallback syntax)**
//    - Inline functions болон useCallBack **(Inline functions vs useCallback)**
// allocate more memory, being garbage collected, show performance
//    - useMemo болон useCallBack **(useMemo vs useCallback)**

export default function Part2() {
  //    - useMemo болон useCallBack **(useMemo vs useCallback)**

  const initialCandies = ["snickers", "skittles", "twix", "milky way"];
  const [candies, setCandies] = useState(initialCandies);

  //    - useCallback syntax **(useCallback syntax)**

  // Inline functions - 0.67 ms, 6 funcs, garbage collected
  // const dispense = (candy: string) => {
  //   setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  // };

  //    - Inline functions болон useCallBack **(Inline functions vs useCallback)**
  // - 0.82 ms, 9 funcs
  const dispense = useCallback((candy) => {
    setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  }, []);

  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul style={{ textAlign: "left" }}>
            {candies.map((candy) => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
