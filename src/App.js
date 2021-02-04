import React from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import useResize from "utils/useResize";

import { setScreenValue } from "./actions/global";
import Home from "./layouts/Home/index";
import InnerPage from "./layouts/InnerPage/index";

import "./styles/global.scss";

const App = () => {
  const dispatch = useDispatch();

  const resize = () => {
    const width = window.innerWidth;

    dispatch(setScreenValue(width));
  };
  useResize(resize);
  return (
    <Switch className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={InnerPage} />
    </Switch>
  );
};

export default App;
