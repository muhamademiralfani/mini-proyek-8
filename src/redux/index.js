// redux/index.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import blogSlice from './async/blogSlice';
import darkModeSlice from './slice/darkModeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Create a persist configuration
const persistConfig = {
  key: 'root', // key for the persisted state
  storage, // storage engine (localStorage in this case)
};

// Combine your reducers
const rootReducer = combineReducers({
  blog: blogSlice,
  darkMode: darkModeSlice, // Add dark mode reducer
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor
export const persistor = persistStore(store);

export default store;
