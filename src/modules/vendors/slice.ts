import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus } from 'src/utils/types';

import { Vendor } from './models';

interface vendorsState {
  count?: number;
  vendors: Vendor[];
  status: RequestStatus;
}

const initialState: vendorsState = {
  vendors: [],
  status: 'PENDING',
};

interface UpdateVendorsPayload {
  count: number;
  vendors: Vendor[];
}

const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: initialState,
  reducers: {
    addVendors(
      state,
      { payload: { count, vendors } }: PayloadAction<UpdateVendorsPayload>
    ) {
      return {
        ...state,
        count,
        vendors: [...state.vendors, ...vendors],
      };
    },
    updateStatus(state, { payload }: PayloadAction<RequestStatus>) {
      return {
        ...state,
        status: payload,
      };
    },
    resetVendors() {
      return initialState;
    },
  },
});

const { addVendors, updateStatus, resetVendors } = vendorsSlice.actions;

export { vendorsSlice, addVendors, updateStatus, resetVendors };

export default vendorsSlice.reducer;