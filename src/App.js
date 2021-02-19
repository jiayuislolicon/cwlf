import React from "react";
import { useDispatch } from "react-redux";
import useResize from "utils/useResize";
import isMobile from "ismobilejs";

import Header from "components/molecules/Header";
import Home from "./layouts/Home/index";

import { setScreenValue } from "./actions/global";

import "./styles/global.scss";

const App = () => {
  const dispatch = useDispatch();

  const resize = () => {
    // recored width when resizing
    const width = window.innerWidth;
    dispatch(setScreenValue(width));

    // detect isMobile
    if (isMobile(window.navigator).any) {
      document.body.classList.remove("hover");
    } else {
      document.body.classList.add("hover");
    }
  };

  useResize(resize);

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
