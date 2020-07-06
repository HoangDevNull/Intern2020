import { ARTICLE, TAG, REMOVE_ARTICLE } from "constant/action";

/**
 * Generate an action with type payload after fetch data
 * @param {*} type
 * @param {*} payload
 * return type and payload if exist
 */
const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const article = {
  loadArticle: (page, offset, tag) => {
    return action(ARTICLE.LOAD, { page, offset, tag });
  },
  setArticle: (articles) => {
    return action(ARTICLE.SUCCESS, articles);
  },
  setError: (error) => {
    return action(ARTICLE.ERROR, error);
  },
  removeArticle: (tag) => {
    return { type: REMOVE_ARTICLE.SUCCESS, tag };
  },
};

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
