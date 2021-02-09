import { createAction } from "redux-actions";
import { getEvents } from "utils/api";

export const getEventList = createAction("GET_EVENT_LIST", async (id) => {
  const res = await getEvents(id);
  return res;
});
