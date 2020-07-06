import { all } from "redux-saga/effects";

import articleSaga from "sagas/articleSaga";
import tagSaga from "sagas/tagSaga";

export default function* () {
  yield all([articleSaga(), tagSaga()]);
}
