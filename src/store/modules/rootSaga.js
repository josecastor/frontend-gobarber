import { all } from 'redux-saga/effects';

import auth from '~/store/modules/auth/saga';

export default function* rootSaga() {
  return yield all([auth]);
}
