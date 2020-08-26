import { all } from 'redux-saga/effects';

import * as colorGroups from './colorGroups';

function* Sagas() {
  yield all([colorGroups.watcherSaga()]);
}

export default Sagas;
