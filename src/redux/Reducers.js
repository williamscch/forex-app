/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getFxPairs = createAsyncThunk('redux/getFxPairs', async () => {
  const response = await fetch(
    'https://financialmodelingprep.com/api/v3/fx?apikey=7f648596eac42a37aa6aa78ad6d23657',
  );
  const res = response.json();
  return res;
});

export const getFxPairInfo = createAsyncThunk(
  'redux/getFxPairInfo',
  async (id) => {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-chart/5min/${id}?apikey=7f648596eac42a37aa6aa78ad6d23657`,
    );
    const res = await response.json();
    return res;
  },
);

const pairsSlice = createSlice({
  name: 'mainPairs',
  initialState: {
    pairs: [],
    pairsFiltered: [],
    dataInfo: [],
    currentPair: '',
    status: '',
    filter: 'ALL',
  },
  reducers: {
    stateBack(state) {
      state.status = '';
    },
    allPairs(state) {
      state.filter = 'ALL';
      state.pairsFiltered = state.pairs;
    },
    pairsUsd(state) {
      state.filter = 'USD';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
    pairsGbp(state) {
      state.filter = 'GBP';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
    pairsJpy(state) {
      state.filter = 'JPY';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
    pairsEur(state) {
      state.filter = 'EUR';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
    pairsChf(state) {
      state.filter = 'CHF';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
    pairsAud(state) {
      state.filter = 'AUD';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
    pairsCad(state) {
      state.filter = 'CAD';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
    pairsNzd(state) {
      state.filter = 'NZD';
      state.pairsFiltered = state.pairs.filter((pair) => pair.ticker.includes(state.filter));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFxPairs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFxPairs.fulfilled, (state, action) => {
        state.status = 'successful';
        state.pairs = [...action.payload];
      })
      .addCase(getFxPairInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFxPairInfo.fulfilled, (state, action) => {
        state.status = 'successful';
        state.dataInfo = [action.payload[0]];
      });
  },
});

export const {
  stateBack,
  allPairs,
  pairsAud,
  pairsCad,
  pairsChf,
  pairsEur,
  pairsGbp,
  pairsJpy,
  pairsNzd,
  pairsUsd,
} = pairsSlice.actions;

export default pairsSlice.reducer;
