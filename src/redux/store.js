import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import PairsRedux from './Reducers';

const store = configureStore({
  reducer: {
    mainFxPairs: PairsRedux,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
