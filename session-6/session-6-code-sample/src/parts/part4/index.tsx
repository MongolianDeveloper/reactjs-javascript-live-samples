import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// - Router-based code splitting **(Router-based code splitting)**

const Home = React.lazy(() => import("./home"));
const About = React.lazy(() => import("./about"));

function Part4() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Part4;
