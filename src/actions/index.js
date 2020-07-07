import {
  ARTICLE,
  TAG,
  REMOVE_ARTICLE,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "constant/action";

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
export const login = {
  loadLogin: (credential) => {
    return action(LOGIN.LOAD, credential);
  },
  setLogin: (username) => {
    return action(LOGIN.SUCCESS, username);
  },
  setError: (errors) => {
    return action(LOGIN.ERROR, errors);
  },
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const register = {
  loadRegister: (credential) => {
    return action(REGISTER.LOAD, credential);
  },
  setRegister: () => {
    return action(REGISTER.SUCCESS);
  },
  setError: (errors) => {
    return action(REGISTER.ERROR, errors);
  },
};
