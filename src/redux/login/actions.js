import createAction from "redux/utils/createAction";
import { USER, LOGIN, LOGOUT } from "./types";
export const login = {
  loadLogin: (credential) => {
    return createAction(LOGIN.LOAD, credential);
  },
  setLogin: (username, image) => {
    return createAction(LOGIN.SUCCESS, { username, image });
  },
  setError: (errors) => {
    return createAction(LOGIN.ERROR, errors);
  },
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const user = {
  loadUser: () => {
    return createAction(USER.LOAD);
  },
  setUser: (username, image) => {
    return createAction(USER.SUCCESS, { username, image });
  },
  setError: (errors) => {
    return createAction(USER.ERROR, errors);
  },
};
