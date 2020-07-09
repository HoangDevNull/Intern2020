const LOAD = "LOAD";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

/**
 * generate action type baseon 3 type LOAD, SUCCES, ERROR
 * @param {*} name
 * Output : object with 3 key LOAD,SUCCESS,ERROR
 */
const createActionType = (name) => {
  return [LOAD, SUCCESS, ERROR].reduce((acc, type) => {
    acc[type] = `${name}_${type}`;
    return acc;
  }, {});
};

export const ARTICLE = createActionType("ARTICLE");
export const REMOVE_ARTICLE = createActionType("REMOVE_ARTICLE");
export const TAG = createActionType("TAG");
export const LOGIN = createActionType("LOGIN");
export const REGISTER = createActionType("REGISTER");
export const POST = createActionType("POST");
export const COMMENT = createActionType("COMMENT");
export const ADD_COMMENT = createActionType("ADD_COMMENT");
export const DROP_COMMENT = createActionType("DROP_COMMENT");
export const USER = createActionType("USER");

export const LOGOUT = "LOGOUT";
