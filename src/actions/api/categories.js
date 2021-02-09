import { createAction } from "redux-actions";
import { getEventsCategories } from "utils/api";

export const getCategories = createAction("GET_CATEGORIES", async () => {
  const res = await getEventsCategories();
  return res;
});
