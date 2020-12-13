import React, { useMemo, useState } from "react";

// 4. Хэзээ useMemo-г ашиглах вэ **(When is useMemo helpful?)**
// 5. Тооцоолол хийх шаардлагатай болох үед **(When do computationally expensive calculations)**
//    - useCallback болон useMemo жишээ **(useCallback and useMemo use cases)**

export default function Part5() {
  const filteredItems = [""];
  // const filteredItems = items.filter((item) => {
  //   return item.name.toLowerCase().includes(search.toLowerCase());
  // });

  // const filteredItems = React.useMemo(
  //   () =>
  //     items.filter((user) => {
  //       console.log("Filter function is running ...");
  //       return user.name.toLowerCase().includes(search.toLowerCase());
  //     }),
  //   [search]
  // );

  return <div>filteredItems! {filteredItems}</div>;
}
