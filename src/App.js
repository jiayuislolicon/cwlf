import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { test } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test());
  }, []);
  return <div className="App" />;
};

export default App;
