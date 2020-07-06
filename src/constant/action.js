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
