import { takeLatest, put, call, select } from "redux-saga/effects";
import { COMMENT, ADD_COMMENT } from "constant/action";
import { comment as commentAction } from "actions";

import { fetchComment, addComment } from "service/api";

function* handleComment({ slug }) {
  try {
    const { comments } = yield call(fetchComment, slug);
    let data =
      comments.length > 0
        ? comments.map((cmt) => {
            return {
              id: cmt.id,
              author: {
                username: cmt.author.username,
                image: cmt.author.image,
              },
              content: cmt.body,
              dateUpdate: cmt.updatedAt,
            };
          })
        : [];
    yield put(commentAction.setComment(data));
  } catch (err) {
    const { errors } = err.response.data;
    yield put(commentAction.setError({ errors }));
  }
}

// get data from store
const getPreData = (state) => state.comment.data;

function* handleAddComment({ slug, content }) {
  try {
    const { comment } = yield call(addComment, slug, content);
    const preData = [...(yield select(getPreData))];
    let newComment = {
      id: comment.id,
      author: {
        username: comment.author.username,
        image: comment.author.image,
      },
      content: comment.body,
      dateUpdate: comment.updatedAt,
    };
    preData.push(newComment);
    yield put(commentAction.setAddComment(preData));
  } catch (err) {
    if (err.message) {
      yield put(commentAction.setAddError({ errors: err.message }));
      return;
    }
    const { errors } = err.response.data;
    yield put(commentAction.setAddError({ errors }));
  }
}

export default function* commentWatcher() {
  yield takeLatest(COMMENT.LOAD, handleComment);
  yield takeLatest(ADD_COMMENT.LOAD, handleAddComment);
}
