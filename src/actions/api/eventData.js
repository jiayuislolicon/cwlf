import { createAction } from "redux-actions";
import { getEvent } from "utils/api";

export const getEventData = createAction("GET_EVENT_DATA", async (id) => {
  const res = await getEvent(id);
  return res;
});
