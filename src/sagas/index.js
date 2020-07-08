import { all, fork } from "redux-saga/effects";

import articleSaga from "sagas/articleSaga";
import tagSaga from "sagas/tagSaga";
import loginSaga from "sagas/loginSaga";
import registerSaga from "sagas/registerSaga";
import postSaga from "sagas/postSaga";
import commentSaga from "sagas/commentSaga";
export default function* () {
  yield all([
    fork(articleSaga),
    fork(tagSaga),
    fork(loginSaga),
    fork(registerSaga),
    fork(postSaga),
    fork(commentSaga),
  ]);
}
