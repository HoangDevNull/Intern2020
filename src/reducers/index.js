import { combineReducers } from "redux";

import articleReducer from "reducers/articleReducer";
import tagReducer from "reducers/tagReducer";
import loginReducer from "reducers/loginReducer";
import registerReducer from "reducers/registerReducer";
import postReducer from "reducers/postReducer";

const rootReducer = combineReducers({
  article: articleReducer,
  tag: tagReducer,
  login: loginReducer,
  register: registerReducer,
  post: postReducer,
});

export default rootReducer;
