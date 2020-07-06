import { combineReducers } from "redux";

import articleReducer from "reducers/article";
import tagReducer from "reducers/tag";

const rootReducer = combineReducers({
  article: articleReducer,
  tag: tagReducer,
});

export default rootReducer;
