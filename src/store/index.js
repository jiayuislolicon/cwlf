import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import promiseMiddleware from "redux-promise-middleware";

import reducers from "../reducers";
// import rootEpic from "../epics/root";

const epicMiddleware = createEpicMiddleware();

const middlewares = [thunkMiddleware, promiseMiddleware, epicMiddleware];

const { createLogger } = require("redux-logger");

middlewares.push(createLogger());
// if (process.env.NODE_ENV !== "production") {
// }

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
