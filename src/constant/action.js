const PENDING = "PENDING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

/**
 * generate action type baseon 3 type PENDING, SUCCES, ERROR
 * @param {*} name
 * Output : object with 3 key PENDING,SUCCESS,ERROR
 */
const createActionType = (name) => {
  return [PENDING, SUCCESS, ERROR].reduce((acc, type) => {
    acc[type] = `${name}_${type}`;
    return acc;
  }, {});
};

export const ARTICLE = createActionType("ARTICLE");
export const TAG = createActionType("TAG");
