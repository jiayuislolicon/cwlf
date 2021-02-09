import { handleActions } from "redux-actions";

const defaultSetting = {
  config: {},
  data: {},
  headers: {},
  request: {},
  status: "",
  statusText: "",
};

export default handleActions(
  {
    GET_BANNER_DATA_PEDDING: (state) => ({
      ...state,
      loading: true,
      response: defaultSetting,
      error: defaultSetting,
    }),
    GET_BANNER_DATA_FULFILLED: (state, action) => ({
      ...state,
      loading: false,
      response: action.payload,
    }),
    GET_BANNER_DATA_REJECTED: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  {
    response: defaultSetting,
    loading: false,
    error: defaultSetting,
  }
);
