import React, { useState } from "react";
import "../App.css";
import Item from "./Item";

// 1. State гэж ву вэ
//    - Компонентыг нуух болон харуулах
//    - Тоолуурын утгыг хадгалах

function Part1() {
  const [count, setCount] = useState(1);
  const [hide, setHide] = useState(false);

  const onClickItemHandler = () => {
    count === 10 ? setHide(true) : setCount((value) => value + 1);
  };

  const onClickRestartHandler = () => {
    setHide(false);
    setCount(1);
  };

  return (
    <>
      <h1>Part 1</h1>
      <div className="container">
        {!hide ? (
          <Item count={count} click={onClickItemHandler} />
        ) : (
          <div className="restart" onClick={onClickRestartHandler}>
            Show
          </div>
        )}
      </div>
    </>
  );
}

export default Part1;
