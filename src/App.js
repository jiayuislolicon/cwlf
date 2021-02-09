import React from "react";
import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
import useResize from "utils/useResize";
import isMobile from "ismobilejs";

import Header from "components/molecules/Header";
import Footer from "components/molecules/Footer";
import Home from "./layouts/Home/index";

import { setScreenValue } from "./actions/global";
// import InnerPage from "./layouts/InnerPage/index";

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
    // <Switch className="App">
    //   <Route exact path="/" component={Home} />
    //   <Route path="/:id" component={InnerPage} />
    // </Switch>
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
