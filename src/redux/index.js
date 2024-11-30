import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { combineReducers } from '@reduxjs/toolkit';
import blogSlice from './async/blogSlice';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptTransform({ secretKey: 'my-super-secret-key' })],
};

const rootReducer = combineReducers({ blog: blogSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
