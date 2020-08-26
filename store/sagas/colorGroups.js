/* eslint-disable no-unused-vars */
import { takeLatest, put } from 'redux-saga/effects';
import { Types as Actions } from '../ducks/colorGroups';

function* requestColorGroups() {
  try {
    const res = yield fetch('https://api.ipify.org?format=json')
    const data = yield res.json()

    yield put({
      type: Actions.REQUEST_COLOR_GROUPS_SUCCESS,
      data: data.ip,
    });
  } catch (err) {
    yield put({
      type: Actions.REQUEST_COLOR_GROUPS_FAIL,
      error: err,
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Actions.REQUEST_COLOR_GROUPS, requestColorGroups);
}
