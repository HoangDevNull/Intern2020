import { all, fork } from "redux-saga/effects";

import articleSaga from "sagas/articleSaga";
import tagSaga from "sagas/tagSaga";
import loginSaga from "sagas/loginSaga";
import registerSaga from "sagas/registerSaga";
import postSaga from "sagas/postSaga";
export default function* () {
  yield all([
    fork(articleSaga),
    fork(tagSaga),
    fork(loginSaga),
    fork(registerSaga),
    fork(postSaga),
  ]);
}
