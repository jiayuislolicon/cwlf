import { createAction } from "redux-actions";

export const setScreenValue = createAction(
  "SET_SCREEN_VALUE",
  (state) => state
);

export const setEventSideNum = createAction(
  "SET_EVENTSLIDE_NUM",
  (state) => state
);

export const setMovingPos = createAction("SET_MOVING_POS", (state) => state);

export const setLoadingStatus = createAction(
  "SET_LOADING_STATUS",
  (state) => state
);
