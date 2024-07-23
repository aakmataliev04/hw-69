import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {Show} from '../types';

interface ShowInfoState {
  show: Show | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: ShowInfoState = {
  show: {},
  isLoading: false,
  isError: false,
};

export const fetchShowInfo = createAsyncThunk(
  'show/fetchShowInfo',
  async (argId) => {
    const {data: show} = await axiosApi.get(`/shows/${argId}`);
    return show;
  });
export const showInfoSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowInfo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchShowInfo.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.show = payload;
      })
      .addCase(fetchShowInfo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export const showInfoReducer = showInfoSlice.reducer;


