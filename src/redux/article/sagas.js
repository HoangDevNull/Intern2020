import { call, put, takeLatest } from "redux-saga/effects";
import { ARTICLE, REMOVE_ARTICLE } from "./types";
import { fetchAricle } from "service/api";
import { article as articleAction } from "./actions";
function* handleFetchArticle(action) {
  try {
    const { page, offset, tag } = action;
    // fetch article list from api
    const articleList = yield call(fetchAricle, page, offset, tag);

    // check if sending defalt tag or new tag.
    let activeTag = tag.length > 0 ? tag : "Global feed";
    const panes = {
      activeKey: activeTag,
      page: page,
      data: {
        tag: activeTag,
        content: articleList,
      },
    };
    yield put(articleAction.setArticle(panes));
  } catch (err) {
    yield put(articleAction.setError(err.toString()));
  }
}

function* handleRemoveArticle(action) {
  const { tag } = action;
  if (tag.includes("Global feed")) {
    yield put(articleAction.removeArticle(tag));
  }
}

export default function* watchArticle() {
  yield takeLatest(ARTICLE.LOAD, handleFetchArticle);
  yield takeLatest(REMOVE_ARTICLE.LOAD, handleRemoveArticle);
}
