import {createSlice} from '@reduxjs/toolkit';
import {Show} from '../types';
import {fetchShows} from './searchThunks';

interface SearchState {
  results: Show[];
  inputValue: string;
  isLoading: boolean;
  isError: boolean;
}

const initialState: SearchState = {
  results: [],
  inputValue: '',
  isLoading: false,
  isError: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInputValue(state, {payload: inputValue}) {
      state.inputValue = inputValue;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchShows.fulfilled, (state, {payload: shows}) => {
        state.isLoading = false;
        state.results = shows;
      })
      .addCase(fetchShows.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});

export const searchReducer = searchSlice.reducer;

export const {setInputValue} = searchSlice.actions;

