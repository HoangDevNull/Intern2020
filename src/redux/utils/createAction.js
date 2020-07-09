/**
 * Generate an action with type payload after fetch data
 * @param {*} type
 * @param {*} payload
 * return type and payload if exist
 */
const action = (type, payload = {}) => {
  return { type, ...payload };
};

export default action;
