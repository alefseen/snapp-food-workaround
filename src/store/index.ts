import { configureStore } from '@reduxjs/toolkit';
import vendorsReducer from 'modules/vendors/slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    vendors: vendorsReducer,
  },
  middleware: _ => _().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

type RootState = ReturnType<typeof store.getState>;
const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export { useSelector };
export default store;
