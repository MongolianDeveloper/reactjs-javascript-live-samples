import React, { Suspense } from "react";

// 2. Code splitting **(Code splitting)**
//    - React Lazy **(React Lazy loader)**

const OtherComponent = React.lazy(() => import("./otherComp"));

function Part2() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

export default Part2;
