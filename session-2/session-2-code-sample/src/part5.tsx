import React, { useEffect, useState } from "react";

// 5. useEffect нь яг хэзээ дуудагддаг вэ **(when does useEffect run?)**

function Top() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Top rendered");
  });

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Top Level {count}</h1>
      <Middle />
    </div>
  );
}

function Middle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Middle rendered");
  });

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Middle Level {count}</h1>
      <Bottom />
    </div>
  );
}

function Bottom() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Bottom rendered");
  });

  return <h1 onClick={() => setCount(count + 1)}>Bottom Level {count}</h1>;
}

export default Top;
