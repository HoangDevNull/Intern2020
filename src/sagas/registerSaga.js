import { takeEvery, put, call } from "redux-saga/effects";
import { REGISTER } from "constant/action";
import { register as registerAction } from "actions";
import { register } from "service/api";

function* handleRegister(credential) {
  try {
    const { username, email, password } = credential;
    console.log("do regis with ", username, email, password);
    const response = yield call(register, username, email, password);
    console.log(response);
    if (response) {
      yield put(registerAction.setRegister());
    }
  } catch (err) {
    const { errors } = err.response.data;
    yield put(registerAction.setError({ errors }));
  }
}

export default function* registerSaga() {
  yield takeEvery(REGISTER.LOAD, handleRegister);
}
