import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./styles/global.scss";
import { test } from "./actions";
import Home from "./layouts/Home/index";
import InnerPage from "./layouts/InnerPage/index";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test());
  }, []);
  return (
    <Switch className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={InnerPage} />
    </Switch>
  );
};

export default App;
