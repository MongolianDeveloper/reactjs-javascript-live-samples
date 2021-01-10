import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

// https://reactjs.org/docs/error-boundaries.html

const BuggyCounter = React.lazy(() => import("./BuggyCounter"));

function Part3() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <BuggyCounter />
        <br />
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  );
}

export default Part3;
