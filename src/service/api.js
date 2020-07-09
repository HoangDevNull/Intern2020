import axios from "axios";
import LocalStorageService from "./localStorageService";

import {
  tagUrl,
  articleUrl,
  loginUrl,
  registerUrl,
  postUrl,
  getCommentUrl,
  addCommentUrl,
  deleteCommentUrl,
  getUserUrl,
} from "constant/api";

let localStorageService = LocalStorageService.getService();

/**
 * Fetch article with 3 param init
 * @param {*} page
 * @param {*} offset
 * @param {*} tag
 */
const fetchAricle = async (page, offset = 10, tag) => {
  const { data, status } = await axios.get(articleUrl(offset, page, tag));
  // call fail -> throw new error to dispatch from article saga
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

/**
 * Fetch post with post slug
 * @param {*} slug
 */
const fetchPost = async (slug) => {
  const { data, status } = await axios.get(postUrl(slug));
  // call fail -> throw new error to dispatch from article saga
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
/**
 * Fetch all tag from api
 */
const fetchTag = async () => {
  const { data, status } = await axios.get(tagUrl());
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
const fetchComment = async (slug) => {
  const { data, status } = await axios.get(getCommentUrl(slug));
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
const addComment = async (slug, comment) => {
  const token = localStorageService.getAccessToken();
  if (!token) {
    console.log("throw new here");
    throw new Error("401 unauthorized");
  }
  const { data, status } = await axios.post(
    addCommentUrl(slug),
    { body: comment },
    { headers: { Authorization: `Token ${token}` } },
  );
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

/**
 * Delete comment by commentId and only user post it can delete it
 * @param {*} slug
 * @param {*} commentId
 */
const deleteComment = async (slug, commentId) => {
  const token = localStorageService.getAccessToken();
  if (!token) {
    console.log("throw new here");
    throw new Error("401 unauthorized");
  }
  const { data, status } = await axios.delete(
    deleteCommentUrl(slug, commentId),
    {
      headers: { Authorization: `Token ${token}` },
    },
  );
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

/**
 * Do login with email and password
 * @param {} email
 * @param {*} password
 */
const login = async (email, password) => {
  const { data, status } = await axios.post(loginUrl(), {
    user: {
      email,
      password,
    },
  });
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

/**
 * Do register with 3 param below
 * @param {*} username
 * @param {*} email
 * @param {*} password
 */
const register = async (username, email, password) => {
  const { data, status } = await axios.post(registerUrl(), {
    user: {
      username,
      email,
      password,
    },
  });
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

/**
 * Get current user with access token
 */
const fetchUser = async () => {
  const token = localStorageService.getAccessToken();
  if (!token) {
    console.log("throw new here");
    throw new Error("401 unauthorized");
  }
  const { data, status } = await axios.get(getUserUrl(), {
    headers: { Authorization: `Token ${token}` },
  });
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {
  fetchAricle,
  fetchTag,
  login,
  register,
  fetchPost,
  fetchComment,
  addComment,
  deleteComment,
  fetchUser,
};
