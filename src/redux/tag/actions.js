import { TAG } from "./types";
import action from "redux/utils/createAction";

export const tag = {
  loadTag: () => {
    return action(TAG.LOAD);
  },
  setTag: (tags) => {
    return action(TAG.SUCCESS, tags);
  },
  setError: (error) => {
    return action(TAG.ERROR, error);
  },
};
