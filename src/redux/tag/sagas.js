import { takeEvery, call, put } from "redux-saga/effects";
import { TAG } from "./types";
import { tag as tagAction } from "./actions";
import { fetchTag } from "service/api";

function* tagWorker() {
  try {
    // load taglist
    const tagList = yield call(fetchTag);
    // dispatch fetch success action
    yield put(tagAction.setTag(tagList));
  } catch (err) {
    // dispatch error message
    put(tagAction.setError(err.toString()));
  }
}

export default function* tagWatcher() {
  yield takeEvery(TAG.LOAD, tagWorker);
}
