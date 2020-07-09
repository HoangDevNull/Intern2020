import createAction from "redux/utils/createAction";
import { COMMENT, DROP_COMMENT, ADD_COMMENT } from "./types";

export const comment = {
  loadComment: (slug) => {
    return createAction(COMMENT.LOAD, { slug });
  },
  setComment: (data) => {
    return createAction(COMMENT.SUCCESS, { payload: data });
  },
  setError: (errors) => {
    return createAction(COMMENT.ERROR, errors);
  },
  loadAddComment: (slug, content) => {
    return createAction(ADD_COMMENT.LOAD, { slug, content });
  },
  setAddComment: (data) => {
    return createAction(ADD_COMMENT.SUCCESS, { payload: data });
  },
  setAddError: (errors) => {
    return createAction(ADD_COMMENT.ERROR, errors);
  },
  loadDropComment: (slug, commentId) => {
    return createAction(DROP_COMMENT.LOAD, { slug, commentId });
  },
  setDropComment: (data) => {
    return createAction(DROP_COMMENT.SUCCESS, { payload: data });
  },
  setDropError: (errors) => {
    return createAction(DROP_COMMENT.ERROR, errors);
  },
};
