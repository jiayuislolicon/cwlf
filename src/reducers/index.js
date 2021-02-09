import { combineReducers } from "redux";
import global from "./global";
import banner from "./api/banner";
import categories from "./api/categories";
import eventData from "./api/eventData";
import eventList from "./api/eventList";

const reducers = combineReducers({
  global,
  banner,
  categories,
  eventData,
  eventList,
});

export default reducers;
