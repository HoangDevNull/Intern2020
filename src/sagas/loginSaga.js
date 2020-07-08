import { takeLatest, put, call, take, fork } from "redux-saga/effects";
import { LOGIN, LOGOUT } from "constant/action";
import { login as loginAction, logout as logoutAction } from "actions";
import { login } from "service/api";
import LocalStorageService from "service/localStorageService";

const localStorageService = LocalStorageService.getService();

function* handleLogin(credential) {
  try {
    const { email, password } = credential;
    const data = yield call(login, email, password);
    const { username, token } = data.user;
    // set token
    localStorageService.setAccessToken(token);
    localStorageService.setUsername(username);

    yield put(loginAction.setLogin({ username }));
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

export default function* loginWatcher() {
  yield takeLatest(LOGIN.LOAD, handleLogin);
  yield take(LOGOUT);
  yield fork(handleLogout);
}
