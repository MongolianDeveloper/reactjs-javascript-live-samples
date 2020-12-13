import React, { useRef, useEffect, useState } from "react";

// 7. Хэзээ useRef-г ашиглах вэ **(When is useRef helpful?)**
//    - Хувьсагчийн утгыг хадгалах **(Keeping a mutable variable)**

export default function Part7_4() {
  // local, class, instance variable
  const intervalRef = useRef<any>(null);

  console.log("rendering...");

  useEffect(() => {
    const func = setInterval(() => {
      console.log("A second has passed");
    }, 3000);

    intervalRef.current = func;

    return () => clearInterval(intervalRef.current);
  });

  return <div>Part7 </div>;
}
