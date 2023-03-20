import { put, takeLatest } from 'typed-redux-saga';

import { globalSlice } from '../global/globalReducer';

import { signInAsync } from './authReducer';

function* loginRequest() {
  // const response = yield* call(authApi.login, {
  //   auth: {
  //     email: 'demo@sporta.vn',
  //     password: '123123',
  //   },
  // });

  // yield put(authSlice.actions.setUserData(response));
  yield put(globalSlice.actions.setIsLogin(true));
}

export function* authSaga() {
  yield takeLatest(signInAsync, loginRequest);
}
