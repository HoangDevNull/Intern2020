import { takeLatest, call, put } from "redux-saga/effects";
import { POST } from "constant/action";
import { post as postAction } from "actions";

import { fetchPost } from "service/api";
function* handlePost({ slug }) {
  try {
    const response = yield call(fetchPost, slug);
    const { article } = response;
    let data = {
      title: article.title,
      content: article.body,
      dateUpdate: article.updatedAt,
      tagList: article.tagList,
      author: {
        username: article.author.username,
        image: article.author.image,
      },
    };
    if (response) {
      yield put(postAction.setPost(data));
    }
  } catch (err) {
    const { errors } = err.response.data;
    yield put(postAction.setError({ errors }));
  }
}

export default function* postWatcher() {
  yield takeLatest(POST.LOAD, handlePost);
}
