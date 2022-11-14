import { all } from 'redux-saga/effects';
import watchVendors from 'modules/vendors/sagas';

export default function* rootSaga() {
  yield all([watchVendors()]);
}
