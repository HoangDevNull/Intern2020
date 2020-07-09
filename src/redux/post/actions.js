import createAction from "redux/utils/createAction";
import { POST } from "./types";
export const post = {
  loadPost: (post) => {
    return createAction(POST.LOAD, { slug: post });
  },
  setPost: (data) => {
    return createAction(POST.SUCCESS, { payload: data });
  },
  setError: (errors) => {
    return createAction(POST.ERROR, errors);
  },
};
