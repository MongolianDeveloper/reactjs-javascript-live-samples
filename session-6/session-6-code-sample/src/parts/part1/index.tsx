import React from "react";
// import add from "./math";

// 1. Bundling гэж юу вэ? **(What is bundling?)**
// https://reactjs.org/docs/code-splitting.html
// https://webpack.js.org/guides/code-splitting/

// 2. Code splitting **(Code splitting)**
//    - Динамик импорт **(Dynamic import)**

function Part1() {
  // console.log(add(16, 26));

  import("./math").then((math) => {
    console.log(math.add(16, 26));
  });

  return <div>Part 1</div>;
}

export default Part1;
