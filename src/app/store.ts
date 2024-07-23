import {configureStore} from '@reduxjs/toolkit';
import {searchReducer} from '../store/searchSlice';
import {showInfoReducer} from '../store/showInfoSlice';


export const store = configureStore({
  reducer: {
    search: searchReducer,
    showInfo: showInfoReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;