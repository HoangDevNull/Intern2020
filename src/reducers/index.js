import { combineReducers } from "redux";

import articleReducer from "reducers/articleReducer";
import tagReducer from "reducers/tagReducer";

const rootReducer = combineReducers({
  article: articleReducer,
  tag: tagReducer,
});

export default rootReducer;
