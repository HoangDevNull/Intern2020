import { takeLatest, put, call, take, fork } from "redux-saga/effects";
import { LOGIN, LOGOUT, USER } from "constant/action";
import {
  login as loginAction,
  logout as logoutAction,
  user as userAction,
} from "actions";
import { login, fetchUser } from "service/api";
import LocalStorageService from "service/localStorageService";

const localStorageService = LocalStorageService.getService();

function* handleLogin(credential) {
  try {
    const { email, password } = credential;
    const data = yield call(login, email, password);
    const { username, token, image } = data.user;

    console.log(username, image);
    // set token
    localStorageService.setAccessToken(token);

    yield put(loginAction.setLogin(username, image));
  } catch (err) {
    const { errors } = err.response.data;
    if (errors) {
      yield put(
        loginAction.setError({ errors: "Email or password is invalid" }),
      );
    }
  }
}

function* handleLogout() {
  // clearn localstorage
  localStorageService.cleanService();
  // clean redux store
  yield put(logoutAction());
}

function* handleLoadUser() {
  try {
    const data = yield call(fetchUser);
    const { username, image } = data.user;
    yield put(userAction.setUser(username, image));
  } catch (err) {
    const { errors } = err.response.data;
    if (errors) {
      yield put(
        loginAction.setError({ errors: "Email or password is invalid" }),
      );
    }
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN.LOAD, handleLogin);
  yield takeLatest(USER.LOAD, handleLoadUser);
  yield take(LOGOUT);
  yield fork(handleLogout);
}
