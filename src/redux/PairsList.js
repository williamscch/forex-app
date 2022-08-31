/* eslint-disable no-param-reassign */

import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

export const getFxPairs = createAsyncThunk('redux/getFxPairs', async () => {
  const response = await fetch(
    'https://financialmodelingprep.com/api/v3/fx?apikey=22af110a6a9e9171c2ee80e9cd1a469f',
  );
  const res = response.json();
  return res;
});

const pairsSlice = createSlice({
  name: 'mainPairs',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getFxPairs.fulfilled]: (state, action) => action.payload,
  },
});

export default pairsSlice.reducer;
