import { createAction } from "redux-actions";
import { getHomepage } from "utils/api";

export const getBanner = createAction("GET_BANNER_DATA", async () => {
  const res = await getHomepage();
  return res;
});
