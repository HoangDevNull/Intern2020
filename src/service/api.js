import axios from "axios";
import {
  tagUrl,
  articleUrl,
  loginUrl,
  registerUrl,
  postUrl,
} from "constant/api";

const fetchAricle = async (page, offset = 10, tag) => {
  const { data, status } = await axios.get(articleUrl(offset, page, tag));
  // call fail -> throw new error to dispatch from article saga
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
const fetchPost = async (slug) => {
  const { data, status } = await axios.get(postUrl(slug));
  // call fail -> throw new error to dispatch from article saga
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchTag = async () => {
  const { data, status } = await axios.get(tagUrl());
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

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

export { fetchAricle, fetchTag, login, register, fetchPost };
