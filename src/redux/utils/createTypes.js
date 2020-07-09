const LOAD = "LOAD";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

/**
 * generate action type baseon 3 type LOAD, SUCCES, ERROR
 * @param {*} name
 * Output : object with 3 key LOAD,SUCCESS,ERROR
 */
const createTypes = (name) => {
  return [LOAD, SUCCESS, ERROR].reduce((acc, type) => {
    acc[type] = `${name}_${type}`;
    return acc;
  }, {});
};

export default createTypes;
