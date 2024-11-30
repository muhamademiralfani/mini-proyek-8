import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import blogSlice from './async/blogSlice';

// Combine your reducers
const rootReducer = combineReducers({ blog: blogSlice });

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
