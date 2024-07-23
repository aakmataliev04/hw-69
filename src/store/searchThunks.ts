import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

export const fetchShows = createAsyncThunk(
  'search/fetchShows',
  async (_arg, thunkAPI) => {
    const inputValue = thunkAPI.getState().search.inputValue;
    const {data: response} = await axiosApi.get(`/search/shows?q=${inputValue}`);
    return response.map(item => ({id: item.show.id, name: item.show.name}));
  }
);