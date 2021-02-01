import { handleActions } from "redux-actions";

export default handleActions(
  {
    SET_TEST: (state) => ({
      ...state,
      test: "test",
    }),
  },
  {
    test: "",
  }
);
