import axios from "axios";
import { tagUrl, articleUrl } from "constant/api";

const fetchAricle = async (page, offset = 10, tag) => {
  const { data, status } = await axios.get(articleUrl(offset, page, tag));
  // call fail -> throw new error to dispatch from article saga
  if (status >= 400) {
    throw new Error(data.errors);
  }
  // first param to fetch
  return data;
};

const fetchTag = async () => {
  const { data, status } = await axios.get(tagUrl());
  if (status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchAricle, fetchTag };
