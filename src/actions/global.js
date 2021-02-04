import { createAction } from "redux-actions";

export const test = createAction("SET_TEST", (state) => state);

export const setScreenValue = createAction(
  "SET_SCREEN_VALUE",
  (state) => state
);
