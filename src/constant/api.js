const BASE_URL = "https://conduit.productionready.io/api";

export const tagUrl = () => {
  return `${BASE_URL}/tags`;
};
export const articleUrl = (limit, offset, tag) => {
  return `${BASE_URL}/articles?limit=${limit}&offset=${offset}&tag=${tag}`;
};

export const loginUrl = () => {
  return `${BASE_URL}/users/login`;
};
export const registerUrl = () => {
  return `${BASE_URL}/users`;
};
export const postUrl = (slug) => {
  return `${BASE_URL}/articles/${slug}`;
};
