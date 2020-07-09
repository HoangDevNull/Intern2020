import {
  ARTICLE,
  TAG,
  REMOVE_ARTICLE,
  LOGIN,
  LOGOUT,
  REGISTER,
  POST,
  COMMENT,
  ADD_COMMENT,
  DROP_COMMENT,
  USER,
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
  setLogin: (username, image) => {
    return action(LOGIN.SUCCESS, { username, image });
  },
  setError: (errors) => {
    return action(LOGIN.ERROR, errors);
  },
};
export const user = {
  loadUser: () => {
    return action(USER.LOAD);
  },
  setUser: (username, image) => {
    return action(USER.SUCCESS, { username, image });
  },
  setError: (errors) => {
    return action(USER.ERROR, errors);
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

export const post = {
  loadPost: (post) => {
    return action(POST.LOAD, { slug: post });
  },
  setPost: (data) => {
    return action(POST.SUCCESS, { payload: data });
  },
  setError: (errors) => {
    return action(POST.ERROR, errors);
  },
};
export const comment = {
  loadComment: (slug) => {
    return action(COMMENT.LOAD, { slug });
  },
  setComment: (data) => {
    return action(COMMENT.SUCCESS, { payload: data });
  },
  setError: (errors) => {
    return action(COMMENT.ERROR, errors);
  },
  loadAddComment: (slug, content) => {
    return action(ADD_COMMENT.LOAD, { slug, content });
  },
  setAddComment: (data) => {
    return action(ADD_COMMENT.SUCCESS, { payload: data });
  },
  setAddError: (errors) => {
    return action(ADD_COMMENT.ERROR, errors);
  },
  loadDropComment: (slug, commentId) => {
    return action(DROP_COMMENT.LOAD, { slug, commentId });
  },
  setDropComment: (data) => {
    return action(DROP_COMMENT.SUCCESS, { payload: data });
  },
  setDropError: (errors) => {
    return action(DROP_COMMENT.ERROR, errors);
  },
};
