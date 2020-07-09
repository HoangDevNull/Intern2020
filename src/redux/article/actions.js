import createAction from "redux/utils/createAction";
import { ARTICLE, REMOVE_ARTICLE } from "./types";

export const article = {
  loadArticle: (page, offset, tag) => {
    return createAction(ARTICLE.LOAD, { page, offset, tag });
  },
  setArticle: (articles) => {
    return createAction(ARTICLE.SUCCESS, articles);
  },
  setError: (error) => {
    return createAction(ARTICLE.ERROR, error);
  },
  removeArticle: (tag) => {
    return { type: REMOVE_ARTICLE.SUCCESS, tag };
  },
};
