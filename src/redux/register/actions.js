import createAction from "redux/utils/createAction";
import { REGISTER } from "./types";

export const register = {
  loadRegister: (credential) => {
    return createAction(REGISTER.LOAD, credential);
  },
  setRegister: () => {
    return createAction(REGISTER.SUCCESS);
  },
  setError: (errors) => {
    return createAction(REGISTER.ERROR, errors);
  },
};
