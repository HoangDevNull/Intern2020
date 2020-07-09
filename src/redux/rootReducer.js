import { combineReducers } from "redux";

import article from "./article";
import tag from "./tag";
import login from "./login";
import register from "./register";
import post from "./post";
import comment from "./comment";

const rootReducer = combineReducers({
  article,
  tag,
  login,
  register,
  post,
  comment,
});

export default rootReducer;
