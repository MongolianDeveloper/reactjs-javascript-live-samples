import React, { useEffect } from "react";

// 4. useEffect-г зөвхөн нэг удаа дуудах **(run useEffect once on mount)**

export default function Part4() {
  useEffect(() => {
    console.log("mounted");
    return () => console.log("unmounting...");
  }, []);

  return <div>part4</div>;
}
