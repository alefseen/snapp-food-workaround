import { put, takeLatest } from 'redux-saga/effects';
import { addVendors, getVendors, updateStatus } from './slice';
import { Vendor } from './models';
import { getVendorsList } from './requests';

function* fetchVendors({ payload }) {
  try {
    yield put(updateStatus('PENDING'));

    const result = yield getVendorsList({ page: payload }).then(res => {
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
  } catch {
    yield put(updateStatus('FAILED'));
  }
}

function* watchVendors() {
  yield takeLatest(getVendors, fetchVendors);
}

export default watchVendors;
