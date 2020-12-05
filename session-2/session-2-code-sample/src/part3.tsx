/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

// 3. useEffect-г байнга дуудагдахаас сэргийлэх **(Prevent useEffect from running every render)**

export default function Part3() {
  const [value, setValue] = useState("initial");

  useEffect(() => {
    const returnInitialValue = () => {
      return "test value";
    };
    returnInitialValue();
  }, [value]);

  return <div onClick={() => setValue("new value")}>part3</div>;
}
