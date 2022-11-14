import { put, takeLatest } from 'redux-saga/effects';
import { addVendors, updateStatus } from './slice';
import { Vendor } from './models';
import { getVendorsList } from './requests';

function* fetchVendors() {
  yield put(updateStatus('PENDING'));

  const result = yield getVendorsList({ page: 0 }).then(res => {
    const newVendors = res.data.finalResult
      .filter(
        (
          item
        ): item is {
          type: 'VENDOR';
          data: Vendor;
        } => item.type === 'VENDOR'
      )
      .map(item => item.data);
    return {
      count: res.data.count,
      vendors: newVendors,
    };
  });

  yield put(addVendors(result));
  yield put(updateStatus('SUCCESS'));
}

function* watchVendors() {
  yield takeLatest('vendors/getVendors', fetchVendors);
}

export default watchVendors;
