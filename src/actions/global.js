import { createAction } from "redux-actions";

export const setScreenValue = createAction(
  "SET_SCREEN_VALUE",
  (state) => state
);

export const setEventSideNum = createAction(
  "SET_EVENTSLIDE_NUM",
  (state) => state
);
