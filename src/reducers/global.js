import { handleActions } from "redux-actions";

export default handleActions(
  {
    SET_SCREEN_VALUE: (state, action) => ({
      ...state,
      width: action.payload,
    }),
    SET_EVENTSLIDE_NUM: (state, action) => ({
      ...state,
      eventSlideNum: action.payload,
    }),
    SET_MOVING_POS: (state, action) => ({
      ...state,
      nowPos: action.payload,
    }),
  },
  {
    width: 0,
    eventSlideNum: 0,
    nowPos: "",
  }
);
