import React, { useEffect, useState } from "react";

// - useEffect төгсгөлгүй давталт **(Prevent infinite loops in useEffect)**

export default function Part10() {
  const [object, setObject] = useState({}); //object/array reference likely to cause infinite loop here
  const [count, setCount] = useState(0); //number primitive
  const [title, setTitle] = useState(""); //string primitive

  useEffect(() => {
    console.log("rendering ...");
    setCount(1);
  }, [count]);

  return <ul>Infinite loop test</ul>;
}
