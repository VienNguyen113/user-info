import { takeLatest, call, put } from 'redux-saga/effects';
import { request } from 'utils/request';

import {
  GET_ALL_REQUESTED,
  GET_ALL_SUCCEEDED,
  GET_ALL_FAILED,
  SUBMIT_REQUESTED,
  SUBMIT_FAILED,
  SUBMIT_SUCCEEDED,
} from './constants';

function* handleGetAll() {
  try {
    const data = yield call(() => request().get('/users'));

    yield put({ type: GET_ALL_SUCCEEDED, data });
  } catch (err) {
    yield put({ type: GET_ALL_FAILED, error: err.response.data });
  }
}

function* handleSubmit(action) {
  try {
    const data = yield call(() => request().post('/users', action.user));
    yield put({ type: SUBMIT_SUCCEEDED, data });
  } catch (err) {
    yield put({ type: SUBMIT_FAILED, error: err.response.data });
  }
}

// Individual exports for testing
export default function* saga() {
  yield [takeLatest(GET_ALL_REQUESTED, handleGetAll)];
  yield [takeLatest(SUBMIT_REQUESTED, handleSubmit)];
}
