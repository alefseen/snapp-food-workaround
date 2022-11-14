import { configureStore } from '@reduxjs/toolkit';
import vendorsReducer from './modules/vendors/slice';

const store = configureStore({
  reducer: {
    vendors: vendorsReducer,
  },
});

export default store;
