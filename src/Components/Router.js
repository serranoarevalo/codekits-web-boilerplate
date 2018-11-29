import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Routes/Home";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);
