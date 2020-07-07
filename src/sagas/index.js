import { all, fork } from "redux-saga/effects";

import articleSaga from "sagas/articleSaga";
import tagSaga from "sagas/tagSaga";
import loginSaga from "sagas/loginSaga";
import registerSaga from "sagas/registerSaga";

export default function* () {
  yield all([
    fork(articleSaga),
    fork(tagSaga),
    fork(loginSaga),
    fork(registerSaga),
  ]);
}
