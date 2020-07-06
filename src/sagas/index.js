import { TAG } from "constant/action";
import { put, call, takeEvery, all } from "redux-saga/effects";

function* fetchTag() {
  console.log("do tag fetch");
}

function* sagaWatcher() {
  yield takeEvery({ type: TAG.SUCCESS });
}

export default function* rootSaga() {
  yield all([sagaWatcher()]);
}
