import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import useResize from "utils/useResize";
import isMobile from "ismobilejs";

import Header from "components/molecules/Header";
// import Home from "layouts/Home";

import { setScreenValue } from "./actions/global";

import "./styles/global.scss";

const Home = lazy(() => import("layouts/Home"));

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
      <Suspense fallback={<div>...</div>}>
        <Header />
        <Home />
      </Suspense>
    </div>
  );
};

export default App;
