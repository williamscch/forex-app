import { configureStore } from '@reduxjs/toolkit';
import PairsRedux from './PairsList';
import InfoRedux from './PairsInfo';

const store = configureStore({
  reducer: {
    mainFxPairs: PairsRedux,
    infoFxPair: InfoRedux,
  },
});

export default store;
