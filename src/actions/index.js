import { ARTICLE, TAG } from "constant/action";

/**
 * Generate an action with type payload after fetch data
 * @param {*} type
 * @param {*} payload
 */
const action = (type, payload = {}) => {
  return { type, ...payload };
};

export const article = {
  pending: (page, offset, tag) => {
    return action(ARTICLE.PENDING, { page, offset, tag });
  },
  sucess: (articles) => {
    return action(ARTICLE.SUCCESS, articles);
  },
  error: (error) => {
    return action(ARTICLE.ERROR, error);
  },
};

export const tag = {
  pending: () => {
    return action(TAG.PENDING);
  },
  sucess: (tagList) => {
    return action(TAG.SUCCESS, tagList);
  },
  error: (error) => {
    return action(TAG.ERROR, error);
  },
};
