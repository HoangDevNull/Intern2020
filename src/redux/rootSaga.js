import { all, fork } from "redux-saga/effects";

import { articleSagas } from "./article";
import { tagSagas } from "./tag";
import { loginSagas } from "./login";
import { registerSagas } from "./register";
import { postSagas } from "./post";
import { commentSagas } from "./comment";

export default function* () {
  yield all([
    fork(articleSagas),
    fork(tagSagas),
    fork(loginSagas),
    fork(registerSagas),
    fork(postSagas),
    fork(commentSagas),
  ]);
}
