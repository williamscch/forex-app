/* eslint-disable no-param-reassign */

import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

export const getFxPairInfo = createAsyncThunk(
  'redux/getFxPairInfo',
  async () => {
    const response = await fetch(
      'https://financialmodelingprep.com/api/v3/historical-chart/1min/JPYUSD?apikey=7f648596eac42a37aa6aa78ad6d23657',
    );
    const res = await response.json();
    return res;
  },
);

const pairInfoSlice = createSlice({
  name: 'infoPair',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getFxPairInfo.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default pairInfoSlice.reducer;
